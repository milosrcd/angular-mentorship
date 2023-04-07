import { Subject, takeUntil } from 'rxjs';
import { Category } from '../../../models/category.enum';
import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit, OnDestroy {
  unsubscribe$: Subject<void> = new Subject<void>;

  categoriesList: Category[] = [];


  constructor(private categoryService: CategoryService) { }
  @Output() displayValue = new EventEmitter<string>();

  displayOption: string = '';

  ngOnInit(): void {
    this.categoryService.getAllCategories().pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(
      response => {
        this.categoriesList = response;
      }
    )
  }

  onClick() {
    this.displayValue.emit(this.displayOption);
  }

  getOptionValue(event: any): void {
    this.displayOption = event.target.value;
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
