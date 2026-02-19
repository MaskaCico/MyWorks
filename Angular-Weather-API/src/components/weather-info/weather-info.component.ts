import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from '../../app/services/weather.service';
import { Weather } from '../../app/models/weather';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.css'],
})
export class WeatherInfoComponent implements OnInit, OnDestroy {
  weather?: Weather;
  city = 'Budapest';
  isDaytime: boolean = true;
  errorMsg: string = '';
  localTime: string = '';
  private timer?: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.fetchWeather();
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }

  fetchWeather(): void {
    if (!this.city) return;
    this.errorMsg = '';
    this.weatherService.getWeather(this.city).subscribe({
      next: (data) => {
        this.weather = data;
        this.setLocalTimeAndDayMode();
        this.errorMsg = '';
      },
      error: (err) => {
        this.weather = undefined;
        this.errorMsg = 'Invalid city name';
        this.localTime = '';
        if (this.timer) clearInterval(this.timer);
      },
    });
  }

  setLocalTimeAndDayMode(): void {
    if (
      !this.weather ||
      !this.weather.location ||
      !this.weather.location.localtime
    )
      return;
    this.updateLocalTimeAndDayMode();
    if (this.timer) clearInterval(this.timer);
    this.timer = setInterval(() => this.updateLocalTimeAndDayMode(), 1000);
  }

  updateLocalTimeAndDayMode(): void {
    if (
      !this.weather ||
      !this.weather.location ||
      !this.weather.location.localtime
    )
      return;
    // WeatherAPI localtime: '2025-06-28 21:34'
    const [date, time] = this.weather.location.localtime.split(' ');
    let [hour, minute] = time.split(':').map(Number);
    // increment seconds
    let now = new Date(`${date}T${time}:00`);
    now.setSeconds(now.getSeconds() + 1);
    hour = now.getHours();
    minute = now.getMinutes();
    this.localTime = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    this.isDaytime = hour >= 6 && hour < 20;
    // update the weather.location.localtime string for next tick
    this.weather.location.localtime = `${date} ${now
      .toTimeString()
      .slice(0, 5)}`;
  }
}
