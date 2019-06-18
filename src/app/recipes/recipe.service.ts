import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

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

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
