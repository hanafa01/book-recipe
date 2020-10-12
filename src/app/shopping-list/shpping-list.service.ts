import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  startedEditing = new Subject<number>();

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes',10)
  ];

  constructor() { }

  getIngredient(index: number){
    return this.ingredients[index];
  }

  addIngredient(ingradient: Ingredient){
    this.ingredients.push(ingradient);
  }

  updateIngredient(index: number, newIngradient: Ingredient){
    this.ingredients[index] = newIngradient;
  }

  addIngredients(ingredients: Ingredient[]){
    /*for(let ingredient of ingredients){
      this.addIngredient(ingredient);
    }*/

    /* OR */

    this.ingredients.push(...ingredients);
  }


}
