import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{

  constructor() {}

  recipes = [
    {id: 1, name: 'Chocolate Chip Cookies', description: 'Sugar, flour, chocolate chips, etc.'},
    {id: 2, name: 'Wheat Bread', description: 'Yeast, flour, water, etc'},
    {id: 3, name: 'Apple Pie', description: 'Apple pie filling, pie crust, water, etc.'}
];

selectedRecipe?: any;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSelect(recipe: any): void {
    this.selectedRecipe = recipe;
  }
  
  onDelete(recipe: any): void {
    this.recipes = this.recipes.filter(obj => obj.id != recipe.id);
  }
}
