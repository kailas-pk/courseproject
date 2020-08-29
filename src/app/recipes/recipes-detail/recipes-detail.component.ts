import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit,DoCheck {

 // @Input('recipeD') recipe:Recipe;

  recipe : Recipe ; 
  id: number;
  constructor(private recipeService:RecipeService,
              private route : ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    //const id= this.route.snapshot.params['id']; //this will only work for first time we loaded the detail component doest 
      // get changed id on the recipe detail component
      // we can react to changes to our recipe on the same components which recipe detail component
      this.route.params
        .subscribe(
          (params:Params)=>{
             this.id=+params['id']; //gets the number in string to cast it add plus sign to it i.e +params['id] ;
             this.recipe=this.recipeService.getRecipe(this.id) ;
             console.log(" id : "+this.id);
          }
        )
  }

  ngDoCheck(){
    console.log("ngDoCheck recip seleced  "+this.recipe);
  }

  onAddToShoppinglist(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);  
  }

  onEditRecipe(){ 
      this.router.navigate(['edit'], {relativeTo: this.route});
      //this.router.navigate(['../',this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
