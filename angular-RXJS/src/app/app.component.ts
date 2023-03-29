import { interval, fromEvent, debounceTime } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  currentTime$ = interval(1000);

  constructor(){
  }

  ngOnInit(): void {

  }

  trackTimer() {
    this.currentTime$.subscribe(() =>
      console.log(new Date()));
  }

  searchEvent(){
    const searchInput$ = fromEvent(document.getElementById('searchInput') as HTMLElement, 'input').pipe(debounceTime(500));
    searchInput$.subscribe(data => console.log(data));
  }
}
