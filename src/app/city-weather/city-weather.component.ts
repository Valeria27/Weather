import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from '../cities-list/weather.service';
import { IWeather } from '../cities-list/weather';


@Component({
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.css']
})
export class CityWeatherComponent implements OnInit {
  PageTitle: string = 'Weather forecast for ';
  city: IWeather[] = [];
  forecast: any = [];

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _weatherService: WeatherService) {}

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this._weatherService.getCityWeatherById(id)
        .subscribe(city =>{
             this.city = city;
        })
    this._weatherService.getWeatherForecastById(id)
       .subscribe(forecast =>{
             this.forecast = forecast;
        })
  }

  onBack(): void {
    this._router.navigate(['/cities-list']);
  }

}
