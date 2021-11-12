import {EventEmitter, Injectable} from "@angular/core";
import {Recipe} from "../models/recipe.model";
import {Ingredient} from "../models/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {
  }

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2021/08/Sausage-and-mushroom-ragu-203c7d4.jpg?quality=90&resize=960,872',
      [
        new Ingredient("tomato", 2),
        new Ingredient("Meat", 1)
      ]),
    new Recipe(
      'Another Test Recipe',
      'This is simply another test',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/potluck-dishes-vegetarian-chili-macaroni-1574870284.jpg?crop=0.913xw:0.609xh;0,0.187xh&resize=640:*',
      [new Ingredient("egg", 3)]),
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice(); // Slice returns array without reference to this obj
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
