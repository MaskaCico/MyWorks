import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.css'],
})
export class WeatherInfoComponent implements OnInit {
  title = 'Ez egy példa komponens';

  constructor() {}

  ngOnInit(): void {}
}
