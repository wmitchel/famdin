import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Recipe } from 'src/app/models';
import { RecipesProvider } from 'src/app/services/recipes.provider';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss'],
})
export class AddRecipeComponent implements OnInit {
  formGroup!: FormGroup;
  recipeForm!: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';

  constructor(
    private formBuilder: FormBuilder,
    private recipesProvider: RecipesProvider
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      name: [null, Validators.required],
      minutesToCook: [null, Validators.min(0)],
      minutesToPrep: [null, Validators.min(0)],
      image: '',
      numberOfServings: [null, Validators.min(1)],
      description: [
        null,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(140),
        ],
      ],
    });
  }

  get name(): FormControl {
    return this.formGroup.get('name') as FormControl;
  }

  get minutesToCook(): FormControl {
    return this.formGroup.get('minutesToCook') as FormControl;
  }

  get minutesToPrep(): FormControl {
    return this.formGroup.get('minutesToPrep') as FormControl;
  }

  get numberOfServings(): FormControl {
    return this.formGroup.get('numberOfServings') as FormControl;
  }

  get description(): FormControl {
    return this.formGroup.get('description') as FormControl;
  }

  // getErrorPassword() {
  //   return this.password.hasError('required')
  //     ? 'Field is required (at least eight characters, one uppercase letter and one number)'
  //     : this.password.hasError('requirements')
  //     ? 'Password needs to be at least eight characters, one uppercase letter and one number'
  //     : '';
  // }

  onSubmit(post: any) {
    const newRecipe = {
      name: post.name,
      minutesToCook: post.minutesToCook,
      minutesToPrep: post.minutesToPrep,
      numberOfServings: post.numberOfServings,
      description: post.description,
    } as Recipe;

    this.recipesProvider.createRecipe(newRecipe);

    this.post = post;
  }
}
