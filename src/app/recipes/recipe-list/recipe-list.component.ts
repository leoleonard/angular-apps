import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('first recipe', 'it is the very first one', 'https://fitfoodiefinds.com/wp-content/uploads/2015/10/classic-oatmeal.png'),
    new Recipe('second recipe', 'it is second recipe', 'https://fitfoodiefinds.com/wp-content/uploads/2015/10/classic-oatmeal.png'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
