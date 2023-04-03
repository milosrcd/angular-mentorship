import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() visibleValue = new EventEmitter<boolean>();
  visible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  hamburgerClicked(): void {
    this.visible = !this.visible;
    this.visibleValue.emit(this.visible);
  }
}
