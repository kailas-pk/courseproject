import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import  { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{

    //recipeSelected= new EventEmitter<Recipe>();
    //since the above EventEmitter is not Decorated with @Output and not part of the Component which would 
    //a total different use case and 
    //so since we simply use that for cross component communication through a service we should replace this with a Subject as well
    
    recipeSelected =new Subject<Recipe>();

    private recipes: Recipe[]=[
        new Recipe('Tasty Schnitzel',
        'A super-tasty Schnitzel - just awesome!',
        'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG'
        ,[
            new Ingredient('Meat',1),
            new Ingredient('French Fries',20)
        ]),
        new Recipe('Big Fat Burger',
        'What else you need to say?',
        'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
        [
            new Ingredient('Buns',2),
            new Ingredient('Meat',1)
        ])
      ];

      constructor(private shoppingListService:ShoppingListService){}

      getRecipes(){
          //return this.recipes; -- returns direct reference of this array 
          return this.recipes.slice(); // this returns new array which an exact copy of the original array
      }

      addIngredientsToShoppingList(ingredients:Ingredient[]){
           this.shoppingListService.addIngredients(ingredients);
      }
    

      getRecipe(index:number){
          return this.recipes[index];
      }
}