import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as Recipes from '../mocks/Recipes.json';
import { Recipe } from '../models';

@Injectable()
export class RecipesService {
  recipeCache: Recipe[] | null = null;
  constructor() {}

  getAllRecipes(): Recipe[] {
    if (!this.recipeCache) {
      this.recipeCache = Object.values(Recipes) as Recipe[];
    }
    return this.recipeCache;
  }
}
