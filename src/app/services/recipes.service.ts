import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as Recipes from '../mocks/Recipes.json';
import { Recipe } from '../models';

@Injectable()
export class RecipesService {
  constructor() {}

  getAllRecipes(): Observable<Recipe[]> {
    return of(Recipes as Recipe[]);
  }
}
