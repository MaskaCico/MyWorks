import { Component, OnInit } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { Food } from '../services/food/food';

@Component({
  selector: 'app-tags',
  standalone: false,
  templateUrl: './tags.html',
  styleUrl: './tags.css',
})
export class Tags implements OnInit {
  tags: Tag[] = [];

  constructor(private foodService: Food) {}

  ngOnInit(): void {
    this.tags = this.foodService.getAllTags();
  }
}
