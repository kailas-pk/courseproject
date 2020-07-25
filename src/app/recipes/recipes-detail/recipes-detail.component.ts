import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit,DoCheck {

  @Input('recipeD') recipe:Recipe;

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }

  ngDoCheck(){
    console.log("ngDoCheck recip seleced  "+this.recipe);
  }

  onAddToShoppinglist(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);  
  }
}
