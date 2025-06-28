// src/app/services/weather.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from '../models/weather';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private apiKey = 'ce91698f7ba5469a90f115729252806'; // WeatherAPI kulcs
  private baseUrl = 'https://api.weatherapi.com/v1/forecast.json';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<Weather> {
    const url = `${this.baseUrl}?key=${this.apiKey}&q=${city}&days=1&aqi=no&alerts=no`;
    return this.http.get<Weather>(url);
  }
}
