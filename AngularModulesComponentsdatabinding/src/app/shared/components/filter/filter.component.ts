import { CategoryService } from './../../../core/services/category.service';
import { Subject, takeUntil } from 'rxjs';
import { Category } from '../../../features/models/category.enum';
import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Categories } from 'src/app/core/interfaces/category.interface';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit, OnDestroy {
  @Output() categorySelected = new EventEmitter<string>();

  defaultValue = '';

  unsubscribe$: Subject<void> = new Subject<void>;

  categoriesList: Categories[] = [];

  constructor(private categoryService: CategoryService) { }


  ngOnInit(): void {
    this.getCategories();

    const filter: string | null = localStorage.getItem('filter');

    if (filter) {
     const stringToObj = JSON.parse(filter);
     this.defaultValue = stringToObj.categoryName;
    }
  }

  onChange(event: MatSelectChange){
    this.categorySelected.emit(event.value.join(','));
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
