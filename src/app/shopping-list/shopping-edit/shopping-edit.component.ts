import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {

  @ViewChild('f') shopppingListForm:NgForm;
  subscription:Subscription;
  editMode=false;
  editItemIndex:number;
  editedItem:Ingredient;
  
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.subscription=this.shoppingListService.startedEditing.
    subscribe((index:number)=> {
        this.editItemIndex=index;
        this.editMode=true;
        this.editedItem=this.shoppingListService.getIngredient(index);
        this.shopppingListForm.setValue({
          name:this.editedItem.name,
          amount:this.editedItem.amount
        })
    });
  }

  onAddItemOrEditItem(form:NgForm){
    console.log(form);
    const value=form.value;
    const newIngredient =new Ingredient(value.name,value.amount);
    if(this.editMode){
      this.shoppingListService.updateIngredient(this.editItemIndex,newIngredient);
    }else{
      this.shoppingListService.addIngredient(newIngredient);
    }

    this.editMode=false;
    form.reset();
    
  }

  onClear(){
    this.shopppingListForm.reset();
    this.editMode=false;
  }

  onDelete(){
    this.shoppingListService.deleteIngredient(this.editItemIndex);
    this.onClear();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe(); 
  }

}
