import {Recipe} from './recipe.model';
import { Injectable } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'first recipe',
      'it is the very first one',
      'https://fitfoodiefinds.com/wp-content/uploads/2015/10/classic-oatmeal.png',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Fries', 12),
        new Ingredient('Mayo', 1),
      ]
      ),
    new Recipe(
      'second recipe',
      'it is second recipe',
      'https://www.seriouseats.com/recipes/images/2015/05/Anova-Steak-Guide-Sous-Vide-Photos15-beauty.jpg',
      [
        new Ingredient('Bread', 2),
        new Ingredient('Butter', 1),
      ]
      ),
  ];

  constructor (private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
   this.recipes.splice(index, 1);
   this.recipesChanged.next(this.recipes.slice());
  }
}
