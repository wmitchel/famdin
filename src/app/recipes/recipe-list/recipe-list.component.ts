import { Component, Inject, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models';
import { RecipesProvider } from 'src/app/services/recipes.provider';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
  providers: [{ provide: RecipesProvider, useClass: RecipesService }],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] | null = null;
  constructor(private recipesProvider: RecipesProvider) {}

  ngOnInit(): void {
    this.recipes = this.recipesProvider.getAllRecipes();
  }
}
