import { Candidate } from './models/candidate.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'typescriptIntroduction';

  candidate1 = new Candidate('Marko', 'Petrovic', new Date(1987, 1, 1));
  candidate2 = new Candidate('Aleksandar', 'Djordjevic', new Date(1989, 2, 2));

  arrayOfCandidates: Candidate[] = [
    {
      firstName: 'Milos',
      lastName: 'Radosavljevic',
      birthday: new Date(1987, 3, 4),
    },
    {
      firstName: 'Tamara',
      lastName: 'Manojlovic',
      birthday: new Date(1987, 0, 4),
    },
  ];

  ngOnInit(): void {
    console.log(this.candidate1);
    console.log(this.candidate2);

    console.log(this.arrayOfCandidates);
    const candidateString = this.printCandidates(this.arrayOfCandidates);
    console.log(candidateString);
  }

  printCandidates(candidates: Candidate[]): string {
    return candidates
      .map(
        (candidate) =>
          `${candidate.firstName}` +
          ' ' +
          `${candidate.lastName}` +
          ' : ' +
          `${candidate.birthday.toDateString()}`
      )
      .join(' \n');
  }
}
