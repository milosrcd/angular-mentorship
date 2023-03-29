import { ajax } from 'rxjs/ajax';
import { interval, debounceTime, combineLatest, forkJoin, of, fromEvent } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  currentTime$ = interval(1000);
  values = '';

  onEnter(value: string) {
    console.log(this.values = value);
  }

  data1$ = ajax('https://www.boredapi.com/api/activity?participants=1');
  data2$ = ajax('https://www.boredapi.com/api/activity?type=recreational');

  constructor() {
  }

  ngOnInit(): void {

  }

  trackTimer() {
    this.currentTime$.subscribe(() =>
      console.log(new Date()));
  }

  searchEvent() {
    const searchInput$ = fromEvent(document.getElementById('searchInput') as HTMLElement, 'input').pipe(debounceTime(500));
    searchInput$.subscribe(data => console.log(data));
  }

  forkJoinApis(){
    forkJoin({
      data1: this.data1$,
      data2: this.data2$
    }).subscribe(({ data1, data2 }) => {
      console.log(data1);
      console.log(data2);
    })
  }
}
