import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.scss']
})
export class LayoutPageComponent implements OnInit {
  isSidebarVisible: boolean = false;
  private unsubscribe$: Subject<void> = new Subject<void>;

  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.toggleVisible();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private toggleVisible(): void {
    this.sidebarService.toggleSidenav$
      .asObservable()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((value) => this.isSidebarVisible = value);
  }

}
