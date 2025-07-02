import { Component, OnInit } from '@angular/core';
import { Food } from '../services/food/food';
import { Foods } from '../shared/models/Foods';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-food-page',
  standalone: false,
  templateUrl: './food-page.html',
  styleUrls: ['./food-page.css'],
})
export class FoodPage implements OnInit {
  food!: Foods;

  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: Food
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.food = foodService.getFoodById(Number(params['id']));
      }
    });
  }

  ngOnInit(): void {}
}
