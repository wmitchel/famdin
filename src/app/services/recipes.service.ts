import { Observable } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';

import { Recipe } from '../models';
import { RecipesProvider } from './recipes.provider';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipesService extends RecipesProvider {
  private recipesCollection: AngularFirestoreCollection<Recipe>;
  recipes: Observable<Recipe[]>;

  constructor(firestore: AngularFirestore) {
    super();
    this.recipesCollection = firestore.collection<Recipe>('recipes');
    this.recipes = this.recipesCollection.valueChanges();
  }

  getAllRecipes(): Observable<Recipe[]> {
    return this.recipes;
  }

  createRecipe(recipe: Recipe): void {
    this.recipesCollection.add(recipe);
  }

  deleteRecipe(recipeId: string): void {
    throw new Error('Method not implemented.');
  }
}
