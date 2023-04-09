import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SidebarService } from './core/services/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  unsubscribe$: Subject<void> = new Subject<void>;
  isSidebarVisible: boolean = false;

  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.toggleVisable();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private toggleVisable(): void {
    this.sidebarService.toggleSidenav$
      .asObservable()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((value) => this.isSidebarVisible = value);
  }
}
