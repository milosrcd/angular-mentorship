import { Category } from './../../../models/category.enum';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  toppings = new FormControl('');
  toppingList: string[] = [Category.Fantasy, Category.General, Category.History, Category.Romance, Category.Science];

  constructor() { }

  ngOnInit(): void {
  }

}
