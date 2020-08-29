import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService {

 
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing=new Subject<number>();


  private ingredients = [] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomotos', 18)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    //   for(let ingredient of ingredients){
    //       this.addIngredient(ingredient);
    //   } you could do this its viable option but emits on every addition of ingredient

    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
    // (...ingredients) three dots is a ES6 spread operator allows you
    // to turn array of elements to list of elements
  }

  getIngredient(index:number){
    return this.ingredients[index];
  }

  updateIngredient(index:number,newIngredient:Ingredient){
    this.ingredients[index]= newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index:number){
    this.ingredients.splice(index,1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}