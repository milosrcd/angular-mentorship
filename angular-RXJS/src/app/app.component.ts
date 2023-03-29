import { interval } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  currentTime$ = interval(1000);

  ngOnInit(): void {

  }

  trackTimer() {
    this.currentTime$.subscribe(() =>
      console.log(new Date()));
  }
}
