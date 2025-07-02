import { Component, OnInit } from '@angular/core';
import { Food } from '../services/food/food';
import { Foods } from '../shared/models/Foods';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: false,
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.css'],
})
export class Homepage implements OnInit {
  foods: Foods[] = [];

  constructor(private foodService: Food, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['searchTerm']) {
        this.foods = this.foodService
          .getAll()
          .filter((food) =>
            food.name.toLowerCase().includes(params['searchTerm'].toLowerCase())
          );
      } else {
        this.foods = this.foodService.getAll();
      }
    });
  }
}
