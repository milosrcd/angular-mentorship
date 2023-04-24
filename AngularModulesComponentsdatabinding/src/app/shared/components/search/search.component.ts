import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() displaySearch = new EventEmitter<string>();

  defaultValue = '';
  private term: string = '';
  // search = '';

  constructor() {
    const filter: string | null = localStorage.getItem('filter');

    if (filter) {
      const stringToObj = JSON.parse(filter);
      console.log(stringToObj);
      this.defaultValue = stringToObj.displaySearch;
    }

  }

  ngOnInit(): void {
  }

  onClick(): void {
    this.displaySearch.emit(this.term);
  }

  searchTerm(event: any): void {
    this.term = event.target.value;
  }
}
