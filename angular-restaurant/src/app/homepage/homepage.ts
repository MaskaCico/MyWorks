import { Component, OnInit } from '@angular/core';
import { Food } from '../services/food/food';
import { Foods } from '../shared/models/Foods';

@Component({
  selector: 'app-homepage',
  standalone: false,
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.css'],
})
export class Homepage implements OnInit {
  foods: Foods[] = [];

  constructor(private foodService: Food) {}

  ngOnInit(): void {
    this.foods = this.foodService.getAll();
  }
}
