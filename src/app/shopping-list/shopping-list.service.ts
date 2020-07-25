import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
  
    ingredientsChanged=new EventEmitter<Ingredient[]>();
    
    private ingredients=[]=[
        new Ingredient('Apples',5),
        new Ingredient('Tomotos',18)
      ];

      getIngredients(){
         return this.ingredients.slice();
      }

      addIngredient(ingredient:Ingredient){
          this.ingredients.push(ingredient);
          this.ingredientsChanged.emit(this.ingredients.slice());
      }

      addIngredients(ingredients:Ingredient[]){
        //   for(let ingredient of ingredients){
        //       this.addIngredient(ingredient);
        //   } you could do this its viable option but emits on every addition of ingredient
        
        this.ingredients.push(...ingredients); 
        this.ingredientsChanged.emit(this.ingredients.slice());
        // (...ingredients) three dots is a ES6 spread operator allows you
        // to turn array of elements to list of elements
      }
}