import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shpping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipes: Recipe[] = [
    new Recipe("A Test Recipe","This is simply a test","https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg", [
      new Ingredient('Meat',1),
      new Ingredient('French Fries', 10)
    ]),
    new Recipe("A Test Recipe 2","This is simply a test 2","https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg", [
      new Ingredient('Pasta', 10)
    ])
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipe(id: number){
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

}
