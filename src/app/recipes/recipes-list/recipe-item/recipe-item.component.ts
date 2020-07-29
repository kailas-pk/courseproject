import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input('recipeInput') recipe: Recipe;

  @Input() index: number;

  //@Output('recipeSelected') recipeSelected=new EventEmitter<void>();
  //instead 
  //using service to 

  // constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }

 
}
