import { Component, OnInit } from '@angular/core';
import { Recipe } from './../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

    recipes: Recipe[] = [
      new Recipe('Spaghetti Carbonara',
      'La vera ricetta degli spaghetti alla crabonara',
      'https://www.scambiaricette.it/wp-content/uploads/2018/11/carbonara2.jpg.webp'),
      new Recipe('Arrosto con le patate',
      'Delizioso arrosto di vitello con le patate al forno',
      'https://www.donnamoderna.com/wp-content/uploads/2014/09/arrosto-di-vitello-con-patate-dorate-725x545.jpg'),
      new Recipe('Impepata di cozze',
      'Le cozze più buone che mai nella tradizione italiana',
      'https://www.salepepe.it/files/2014/11/cozze-tarantina-200x150.jpg'),
    ];

  constructor() {
  }

  ngOnInit() {
  }

}
