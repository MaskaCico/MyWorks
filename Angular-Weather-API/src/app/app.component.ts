import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { Weather } from './models/weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  weatherData?: Weather;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getWeather().subscribe({
      next: (data) => (this.weatherData = data),
      error: (err) => console.error('API hiba:', err),
    });
  }
}
