import * as Recipes from '../mocks/Recipes.json';
import { Recipe } from '../models';
import { RecipesProvider } from './recipes.provider';

export class RecipesService extends RecipesProvider {
  recipeCache: Recipe[] | null = null;
  constructor() {
    super();
  }

  getAllRecipes(): Recipe[] {
    if (!this.recipeCache) {
      this.recipeCache = Object.values(Recipes) as Recipe[];
    }
    return this.recipeCache;
  }

  createRecipe(recipe: Recipe): void {
    throw new Error('Method not implemented.');
  }

  deleteRecipe(recipeId: string): void {
    throw new Error('Method not implemented.');
  }
}
