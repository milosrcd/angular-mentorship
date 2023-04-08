import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isSidebarVisible: boolean = false;

  isHamburgerClicked(event: boolean) {
    this.isSidebarVisible = event;
  }
}
