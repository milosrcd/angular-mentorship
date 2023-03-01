import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(event: FocusEvent): void{
    const value = (event.target as HTMLInputElement).value;
    console.log(value);
  }
}
