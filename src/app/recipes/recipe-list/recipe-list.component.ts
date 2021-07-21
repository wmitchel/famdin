import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
  providers: [RecipesService],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] | null = null;
  constructor(private recipeService: RecipesService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getAllRecipes();
  }
}
