import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TextFieldModule } from '@angular/cdk/text-field';

import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  RecipeListComponent,
  RecipeCardComponent,
  RecipeDetailComponent,
  AddRecipeComponent,
} from './recipes';
import { RecipesProvider } from './services/recipes.provider';
import { RecipesService } from './services/recipes.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeCardComponent,
    RecipeDetailComponent,
    AddRecipeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    TextFieldModule,
  ],
  providers: [{ provide: RecipesProvider, useClass: RecipesService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
