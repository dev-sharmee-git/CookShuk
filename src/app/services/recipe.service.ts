import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Recipe} from '../models/recipe.model';
import {RECIPES} from '../api/mock-recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  getRecipes(): Observable<Recipe[]> {
    return of(RECIPES);
  }

  getRecipe(id: number): Observable<Recipe> {
    return of(RECIPES.find(recipe => recipe.id === id));
  }
}
