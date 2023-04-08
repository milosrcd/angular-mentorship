import { AdminLink } from './../../interfaces/admin-link.interface';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.enum';
import { Admin } from 'src/app/models/admin.enum';
import { Categories } from '../../interfaces/category.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  events: string[] = [];
  opened?: boolean;
  adminValue: boolean = false;
  category: boolean = false;
  showFiller = false;
  categoriesList: Categories[] = [
    {
      id: 1,
      name: Category.General
    },
    {
      id: 2,
      name: Category.Fantasy
    },
    {
      id: 3,
      name: Category.History
    },
    {
      id: 4,
      name: Category.Literary
    },
    {
      id: 5,
      name: Category.Romance
    },
    {
      id: 6,
      name: Category.Science
    }
  ];
  adminList: AdminLink[] = [
    {
      linkName: Admin.books,
      path: 'book'
    },
    {
      linkName: Admin.categories,
      path: 'categories'
    }
  ];
  constructor() { }

  ngOnInit(): void { }

  onToggle() {
    this.category = !this.category;
  }
  onClick() {
    this.adminValue = !this.adminValue;
  }
}
