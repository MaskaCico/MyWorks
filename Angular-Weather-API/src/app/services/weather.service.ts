// src/app/services/weather.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from '../models/weather';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private url =
    'https://open-weather-map27.p.rapidapi.com/weather?q=Budapest&units=metric';

  private headers = new HttpHeaders({
    'x-rapidapi-key': '86d22868a2mshd292df0421128c9p1e4d1djsnc63a3f2e4e22',
    'x-rapidapi-host': 'open-weather-map27.p.rapidapi.com',
  });

  constructor(private http: HttpClient) {}

  getWeather(): Observable<Weather> {
    return this.http.get<Weather>(this.url, { headers: this.headers });
  }
}
