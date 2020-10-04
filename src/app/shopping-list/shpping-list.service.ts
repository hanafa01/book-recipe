import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes',10)
  ];

  constructor() { }

  addIngredient(ingradient: Ingredient){
    this.ingredients.push(ingradient);
  }

  addIngredients(ingredients: Ingredient[]){
    for(let ingredient of ingredients){
      this.addIngredient(ingredient);
    }
  }


}
