import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

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
import { RecipesProvider, RecipesService } from './services';
import { environment } from 'src/environments/environment';

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
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [{ provide: RecipesProvider, useClass: RecipesService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
