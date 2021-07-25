import { Recipe, RecipeId } from '../models';

export abstract class RecipesProvider {
  abstract getAllRecipes(): Recipe[];
  abstract createRecipe(recipe: Recipe): void;
  abstract deleteRecipe(recipeId: RecipeId): void;
}
