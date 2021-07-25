import { Ingredient } from './ingredients';
import { Instructions } from './instructions';

export type RecipeId = string;

export interface Recipe {
  id?: RecipeId;
  name: string;
  minutesToCook: number;
  minutesToPrep: number;
  image: string;
  numberOfServings: number;
  description?: string; //TODO: Remove optionality
  instructions: Instructions;
  ingredients: Ingredient[];
}
