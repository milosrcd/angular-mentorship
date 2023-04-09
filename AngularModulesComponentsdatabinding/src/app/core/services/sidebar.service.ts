import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  toggleSidenav$: Subject<boolean> = new Subject();

  constructor() { }
}
