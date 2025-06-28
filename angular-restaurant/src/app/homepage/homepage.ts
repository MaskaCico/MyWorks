import { Component, OnInit } from '@angular/core';
import { Food } from '../services/food/food';

@Component({
  selector: 'app-homepage',
  standalone: false,
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.css'],
})
export class Homepage implements OnInit {
  foods: string[] = [];

  constructor(private foodService: Food) {}

  ngOnInit(): void {
    this.foods = this.foodService.getAll();
  }
}
