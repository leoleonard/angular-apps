import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'first recipe',
      'it is the very first one',
      'https://fitfoodiefinds.com/wp-content/uploads/2015/10/classic-oatmeal.png'),
    new Recipe(
      'second recipe',
      'it is second recipe',
      'https://www.seriouseats.com/recipes/images/2015/05/Anova-Steak-Guide-Sous-Vide-Photos15-beauty.jpg'),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
