import { Component, OnInit } from '@angular/core';
import { Weather } from '../../app/models/weather';
import { WeatherService } from '../../app/services/weather.service';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.css'],
})
export class WeatherInfoComponent implements OnInit {
  weatherData?: Weather;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getWeather().subscribe({
      next: (data) => (this.weatherData = data),
      error: (err) => console.error('API hiba:', err),
    });
  }
}
