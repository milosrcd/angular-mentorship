import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  visible: boolean = false;

  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
  }

  hamburgerClicked(): void {
    this.visible = !this.visible;
    this.sidebarService.toggleSidenav$.next(this.visible);
  }

  logOut(){
    localStorage.removeItem('logged_user');
    location.reload();
  }
}
