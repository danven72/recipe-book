import { Component, OnInit } from '@angular/core';
import { Ingredient } from './../models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Bacon', 10),
    new Ingredient('Eggs', 4),
    new Ingredient('Spaghetti', 400),
    new Ingredient('Potatoes', 10),
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
