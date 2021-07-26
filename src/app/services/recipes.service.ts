import { BehaviorSubject, Observable } from 'rxjs';
import { Recipe } from '../models';
import { RecipesProvider } from './recipes.provider';

export class RecipesService extends RecipesProvider {
  recipeCache: Recipe[];
  recipeObservable: BehaviorSubject<Recipe[]>;

  constructor() {
    super();
    this.recipeCache = [];
    this.recipeObservable = new BehaviorSubject<Recipe[]>(this.recipeCache);
  }

  getAllRecipes(): Observable<Recipe[]> {
    return this.recipeObservable;
  }

  createRecipe(recipe: Recipe): void {
    this.recipeCache.push(recipe);
    this.recipeObservable.next(this.recipeCache);
  }

  deleteRecipe(recipeId: string): void {
    throw new Error('Method not implemented.');
  }
}
