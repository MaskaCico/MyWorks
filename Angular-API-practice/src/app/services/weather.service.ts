import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl = 'https://api.open-meteo.com/v1/forecast';

  private weatherSubject = new BehaviorSubject<any>(null);
  public weather$ = this.weatherSubject.asObservable();

  constructor(private http: HttpClient) {}

  fetchWeather(lat: number, lon: number) {
    const url = `${this.apiUrl}?latitude=${lat}&longitude=${lon}&current_weather=true`;
    return this.http
      .get<any>(url)
      .pipe(tap((data) => this.weatherSubject.next(data.current_weather)))
      .subscribe();
  }
}
