import { Component, OnInit } from '@angular/core';
import { IWeather } from './weather';
import {WeatherService} from './weather.service';

@Component({
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.css']
})
export class CitiesListComponent implements OnInit {
  pageTitle: string = 'Cities List';

  _listFilter: string;

  get listFilter(): string{
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter =value;
    this.filteredCities = this.listFilter ? this.performFilter(this.listFilter) : this.cities;
  }

  filteredCities: IWeather[];
  cities: IWeather[] = [];
  
  performFilter(filterBy: string): IWeather[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.cities.filter(( city: IWeather) =>
            city.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  constructor(private _weatherService: WeatherService) {
   }

  ngOnInit(): void {
    this._weatherService.getCitiesWeather()
        .subscribe(cities =>{
             this.cities = cities;
             this.filteredCities =this.cities;      
        });
}
}
