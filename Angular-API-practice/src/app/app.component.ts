import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    const lat = 47.4979;
    const lon = 19.0402;
    this.weatherService.fetchWeather(lat, lon);
  }
}
