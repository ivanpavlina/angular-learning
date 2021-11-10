import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../../../models/recipe.model";
import {Ingredient} from "../../../models/ingredient.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output()
  recipeChanged = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2021/08/Sausage-and-mushroom-ragu-203c7d4.jpg?quality=90&resize=960,872',
      [new Ingredient("tomato", 2)]),
    new Recipe(
      'Another Test Recipe',
      'This is simply another test',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/potluck-dishes-vegetarian-chili-macaroni-1574870284.jpg?crop=0.913xw:0.609xh;0,0.187xh&resize=640:*',
      [new Ingredient("egg", 3)]),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipeEl) {
    this.recipeChanged.emit(recipeEl);
  }
}
