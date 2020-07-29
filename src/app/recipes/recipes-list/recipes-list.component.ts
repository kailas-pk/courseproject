import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

 // @Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipes:Recipe[];

  constructor(private recipeService:RecipeService,
              private router:Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes=this.recipeService.getRecipes();
  }

  // onRecipeSelected(recipe:Recipe){
  //   this.recipeWasSelected.emit(recipe);
  // }

  onNewRecipe(){
        this.router.navigate(['new'], {relativeTo: this.route })
        //to use relative route , we need to inform angular about our current route
        //thats why we inject ActivatedRoute and use this.route
  }

}
