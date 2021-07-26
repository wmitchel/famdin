import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/models';
import { RecipesProvider } from 'src/app/services/recipes.provider';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Observable<Recipe[]> | null = null;
  constructor(private recipesProvider: RecipesProvider) {}

  ngOnInit(): void {
    this.recipes = this.recipesProvider.getAllRecipes();
  }
}
