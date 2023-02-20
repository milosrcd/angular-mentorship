import { User } from './models/user.model';
import { Customer } from './models/customer.model';
import { Employee } from './models/employee.model';
import { Candidate } from './models/candidate.model';
import { Component, OnInit } from '@angular/core';
import { Address } from './models/address.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'typescriptIntroduction';

  candidate1 = new Candidate('Marko', 'Petrovic', new Date(1987, 1, 1));
  candidate2 = new Candidate('Aleksandar', 'Djordjevic', new Date(1989, 2, 2));

  employee1 = new Employee(1, 'Petar Petrovic', 'petar@petar.com', '+381/000000', 'Menadzer');
  employee2 = new Employee(2, 'Marko Markovic', 'marko@marko.com', '+381/0001001', 'Menadzer');

  customer = new Customer(1, 'Milan Milakovic', 'milan@milan.com', '+381/101101', new Address('Kralja Milana', 50, 'Belgrad', 'Serbia'));
  customer1 = new Customer(2, 'Tamara Petrovic', 'tamara@petrovic.com', '+381/0101010', new Address('Kneza Milos', 1, 'Belgrade', 'Serbia'));

  user1 = new User(1, 'Danijela', 'danijela@danijela.com', '+381/222222');
  user2 = new User(2, 'Milos', 'milos@milos.com', '+381/3333333');

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

    console.log(this.employee1);
    console.log(this.employee2);

    console.log(this.customer.customerInfo());
    console.log(this.customer1.getName());
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
