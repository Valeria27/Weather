import { Injectable } from "@angular/core";
import {IWeather} from "./weather";
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from "rxjs";
import { throwError } from "rxjs";
import {catchError, tap , map} from 'rxjs/operators';


@Injectable()

export class WeatherService{
    private _Key ='e8d219017ce01170809263c7dde38429';
    private _weatherUrl ='http://api.openweathermap.org/data/2.5/';

    constructor(private _http: HttpClient){}
    getCitiesWeather(): Observable<IWeather[]> {
        return this._http.get<IWeather[]>(this._weatherUrl + 'box/city?bbox=12,32,15,37,10&appid=' + this._Key).pipe(
                map(data=>data.list),
                tap(data =>console.log ('All: '+JSON.stringify(data))),
                catchError(this.handleError),
        );
    }
    getCityWeatherById(id): Observable<IWeather[]> {
        return this._http.get<IWeather[]>(this._weatherUrl + 'weather?id='+ id + '&appid=' + this._Key).pipe(
                // tap(data =>console.log ('All: '+JSON.stringify(data))),
                catchError(this.handleError)
        );
    }
    getWeatherForecastById (id): Observable<IWeather[]> {
        return this._http.get<IWeather[]>(this._weatherUrl + 'forecast?id='+ id + '&appid=' + this._Key).pipe(
                map(data=>data.list),                
               // tap(data =>console.log ('All: '+JSON.stringify(data))),
                catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse){
        console.log(err.message);
        return throwError(err.message);
    }
}