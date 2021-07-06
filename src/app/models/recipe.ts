import { Ingredient } from './ingredients';
import { Instructions } from './instructions';

export interface Recipe {
  name: string;
  minutesToCook: number;
  minutesToPrep: number;
  image: string;
  numberOfServings: number;
  instructions: Instructions;
  ingredients: Ingredient[];
}
