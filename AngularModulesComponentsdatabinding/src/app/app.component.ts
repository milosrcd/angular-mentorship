import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SidebarService } from './core/services/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isSidebarVisible: boolean = true;
  private unsubscribe$: Subject<void> = new Subject<void>;

  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void { }
}
