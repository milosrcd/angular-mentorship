import { CanActivate } from '@angular/router';
import { AdminLink } from './../../interfaces/admin-link.interface';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Category } from 'src/app/features/models/category.enum';
import { Admin } from 'src/app/features/models/admin.enum';
import { Categories } from '../../interfaces/category.interface';
import { CategoryService } from '../../services/category.service';
import { Subject, map, takeUntil } from 'rxjs';
import { AuthAdminGuard } from '../../auth/guards/auth-admin.guard';

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
      canActivate: [AuthAdminGuard]
    },
    {
      linkName: Admin.categories,
      path: 'categories',
      canActivate: [AuthAdminGuard]
    }
  ];
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
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
