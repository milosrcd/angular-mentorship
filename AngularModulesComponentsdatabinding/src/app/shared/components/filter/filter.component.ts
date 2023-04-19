import { CategoryService } from './../../../core/services/category.service';
import { Subject, takeUntil } from 'rxjs';
import { Category } from '../../../features/models/category.enum';
import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Categories } from 'src/app/core/interfaces/category.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit, OnDestroy {
  @Output() displayValue = new EventEmitter<string>();
  displayOption: string = '';

  unsubscribe$: Subject<void> = new Subject<void>;

  categoriesList: Categories[] = [];

  constructor(private categoryService: CategoryService) { }


  ngOnInit(): void {
    this.getCategories();
  }

  onClick() {
    this.displayValue.emit(this.displayOption);
  }

  getOptionValue(event: any): void {
    this.displayOption = event.target.value;
  }

  private getCategories() {
    this.categoryService.getAllCategories()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(categories => this.categoriesList = categories);
  }


  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
