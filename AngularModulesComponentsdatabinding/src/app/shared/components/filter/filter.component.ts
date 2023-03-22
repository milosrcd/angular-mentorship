import { Category } from '../../../models/category.enum';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Output() displayValue = new EventEmitter<string>();
  categoriesList: string[] = [
    Category.General,
    Category.Fantasy,
    Category.History,
    Category.Romance,
    Category.Science
  ];
  constructor() {}
  displayOption: string = '';

  ngOnInit(): void {}

  onClick() {
    console.log(this.displayOption);
    this.displayValue.emit(this.displayOption);
  }

  getOptionValue(event: any): void {
    this.displayOption = event.target.value;
  }
}
