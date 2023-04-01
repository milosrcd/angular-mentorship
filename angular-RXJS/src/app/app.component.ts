import { ajax } from 'rxjs/ajax';
import { interval, debounceTime, combineLatest, forkJoin, of, BehaviorSubject, Observable, retry, catchError, Subscription, fromEvent, map } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  currentTime$ = interval(1000);
  searchInput$!: Observable<string>;
  input1$!: Observable<string>;
  input2$!: Observable<string>;
  result$!: Observable<string[]>;
  input3$!: Observable<number>;
  input4$!: Observable<number>;

  data1$ = ajax('https://www.boredapi.com/api/activity?participants=1');
  data2$ = ajax('https://www.boredapi.com/api/activity?type=recreational');

  data$?: Observable<any>;

  timerSubscription?: Subscription;
  timerValue = 0;
  timer$?: Observable<number>;


  constructor() {
  }

  ngOnInit(): void {

    this.searchInput$ = fromEvent(document.getElementById('searchInput')!, 'keyup').pipe(
      map((data: Event) => {
        return ((data.target as HTMLInputElement).value)
      }), debounceTime(500)
    );
    this.searchInput$.subscribe((data: string) => {
      console.log('input value: ', data);
    })

    this.input1$ = fromEvent(document.getElementById('input1')!, 'keyup').pipe(
      map((data: Event) => {
        return ((data.target as HTMLInputElement).value)
      })
    );
    this.input2$ = fromEvent(document.getElementById('input2')!, 'keyup').pipe(
      map((data: Event) => {
        return ((data.target as HTMLInputElement).value)
      })
    );

    this.result$ = combineLatest([this.input1$, this.input2$]);
    this.result$.subscribe((data: string[]) => {
      console.log(data)
    })

    this.input3$ = fromEvent(document.getElementById('input3')!, 'keyup').pipe(
      map((data: Event) => {
        return Number((data.target as HTMLInputElement).value);
      })
    )
    this.input4$ = fromEvent(document.getElementById('input4')!, 'keyup').pipe(
      map((data: Event) => {
        return Number((data.target as HTMLInputElement).value);
      })
    )

    const result2$ = combineLatest([this.input3$, this.input4$]).pipe(
      map(([input1, input2]) => input1 + input2)
    );
    result2$.subscribe((result2$) => {
      console.log(`Sum of input3 and input4 is: ${result2$}`);
    })
  }


  trackTimer() {
    this.currentTime$.subscribe(() =>
      console.log(new Date()));
  }

  forkJoinApis() {
    forkJoin({
      data1: this.data1$,
      data2: this.data2$
    }).subscribe(({ data1, data2 }) => {
      console.log(data1);
      console.log(data2);
    })
  }

  startTimer() {
    this.timer$ = interval(1000);
    this.timerSubscription = this.timer$.subscribe(() => {
      this.timerValue++;
    });
  }

  stopTimer() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
      this.timerValue = 0;
    }
  }
}
