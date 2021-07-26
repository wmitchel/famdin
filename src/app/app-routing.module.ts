import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRecipeComponent, RecipeListComponent } from './recipes';

const routes: Routes = [
  { path: 'recipe-list', component: RecipeListComponent },
  { path: 'create-recipe', component: AddRecipeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
