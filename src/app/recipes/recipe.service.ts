import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipes: Recipe[] = [
    new Recipe("A Test Recipe","This is simply a test","https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg", [
      new Ingredient('Meat',1),
      new Ingredient('French Fries', 10)
    ])
  ];

  constructor() { }

  getRecipe(id: number){
    return this.recipes[id];
  }

}
