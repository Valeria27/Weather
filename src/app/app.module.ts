import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts/release';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CitiesListComponent } from './cities-list/cities-list.component';
import { ConvertToTemperaturePipe } from 'src/app/shared/convert-to-temperature.pipe';
import { WeatherService } from 'src/app/cities-list/weather.service';
import { CityWeatherComponent } from './city-weather/city-weather.component';
import { CityIdGuardService } from './city-weather/city-id-guard.service';
import { ComboChartComponent } from './chart/combo-chart.component.ts';
import { ComboSeriesVerticalComponent } from './chart/combo-series-vertical.component';



@NgModule({
  declarations: [
    AppComponent,
    CitiesListComponent,
    ConvertToTemperaturePipe,
    CityWeatherComponent,
    ComboChartComponent,
    ComboSeriesVerticalComponent
  ],
  imports: [
    BrowserAnimationsModule,
    NgxChartsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
     { path: 'cities-list', component: CitiesListComponent },
     { path: 'city/:id', 
      canActivate: [ CityIdGuardService],
      component: CityWeatherComponent },
     { path: '', component: CitiesListComponent }
    ])
  ],
  providers: [
    WeatherService,
    CityIdGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
