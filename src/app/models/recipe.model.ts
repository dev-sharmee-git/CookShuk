import {Ingredient} from './ingredient.model';

export class Recipe {
  id: number;
  ingredients: Ingredient[];
  description: string;
  steps: string[];
  name: string;
}
