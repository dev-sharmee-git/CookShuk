import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Recipe} from './models/recipe.model';
import {RecipeService} from './services/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CookShuk';

  recipes: Recipe[];

  @Output() recipeToEmit = new EventEmitter<number>();

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes(): void {
    this.recipeService.getRecipes()
      .subscribe(recipes => this.recipes = recipes);
  }

  sendRecipeId(id: number): void {
    this.recipeToEmit.emit(id);
  }
}
