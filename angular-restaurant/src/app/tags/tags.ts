import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { Food } from '../services/food/food';

@Component({
  selector: 'app-tags',
  standalone: false,
  templateUrl: './tags.html',
  styleUrl: './tags.css',
})
export class Tags implements OnInit {
  @Input()
  foodPageTags?: string[];

  @Input()
  justifyContent: string = 'center';
  tags?: Tag[];

  constructor(private foodService: Food) {}

  ngOnInit(): void {
    if (!this.foodPageTags) this.tags = this.foodService.getAllTags();
  }
}
