import { Candidate } from './models/candidate.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'typescriptIntroduction';

  ngOnInit(): void {
    const candidate1 = new Candidate('Marko', 'Petrovic', new Date(1987, 1, 1));
    const candidate2 = new Candidate('Aleksandar', 'Djordjevic', new Date(1989, 2, 2));

    console.log(candidate1);
    console.log(candidate2);

    const arrayOfCandidates: Candidate[] = [
      {"firstName": 'Milos', "lastName": 'Radosavljevic', "birthday": new Date(1987, 1, 4)},
      {"firstName": 'Tamara', "lastName": 'Manojlovic', "birthday": new Date(1987, 4, 1)}
    ];

    console.log(arrayOfCandidates);
  }

}
