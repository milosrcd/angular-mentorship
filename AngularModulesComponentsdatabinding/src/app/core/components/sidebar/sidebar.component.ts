import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Admin } from 'src/app/features/models/admin.enum';
import { AuthService } from '../../auth/services/auth.service';
import { Categories } from '../../interfaces/category.interface';
import { CategoryService } from '../../services/category.service';
import { AdminLink } from './../../interfaces/admin-link.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  events: string[] = [];
  opened?: boolean;
  adminValue: boolean = false;
  category: boolean = false;
  showFiller = false;
  categoriesList: Categories[] = [];

  private unsubscribe$: Subject<void> = new Subject<void>;

  adminList: AdminLink[] = [
    {
      linkName: Admin.books,
      path: 'book',
    },
    {
      linkName: Admin.categories,
      path: 'categories',
    }
  ];

  isAdmin = false;

  constructor(
    private categoryService: CategoryService,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.getCategories();
    this.isAdmin = this.authService.isAdmin();
  }

  onToggle() {
    this.category = !this.category;
  }
  onClick() {
    this.adminValue = !this.adminValue;
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
