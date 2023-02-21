import { Book } from './models/book.model';
import { Post } from './models/post.model';
import { BaseEntity } from './models/baseEntity.model';
import { Product } from './models/product.model';
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

  product1 = new Product(1, 'Phone', 200, 'Huawei p20');
  product2 = new Product(2, 'Laptop', 800, 'Honor magic Book');
  product3 = new Product(3, 'Earbuds', 150, 'Huawei freeBuds 3i');
  product4 = new Product(4, 'Monitor', 200, 'Samsung SuncMaster');
  product5 = new Product(5, 'Mouse', 20, 'Logitech');


  productBaseEnt = new Product(6, 'modem', 50, 'cisco');
  userBaseEnt = new User(3, 'Jelena', 'jelena@jelena.com', '+381/444444');
  customerBaseEnt = new Customer(3, 'Marija Petrovic', 'marija@marija.com', '+381/555555', new Address('Pere Cetkovica', 1, 'Belgrade', 'Serbia'));
  employeeBaseEnt = new Employee(3, 'Stefan Lazic', 'stefan@stefan', '+381/555333', 'Team Leader');

  baseEntity: BaseEntity = {
    id: 1,
    sayHello: function (): void {
    }
  }

  postInterface1: Post = {
    id: 1,
    title: 'Story',
    description: 'Story is posted',
    dateCreated: new Date(2023, 1, 21),
    numberOfLikes: 50
  }

  postInterface2: Post ={
    id:2,
    title: 'Photo',
    description: 'Photo is posted',
    dateCreated: new Date(2023, 0, 12),
    numberOfLikes: 150
  }

  bookInterface1: Book = {
    id:1,
    title: 'The Hobbit',
    description: 'The Hobbit, or There and Back Again',
    dateCreated: new Date(1937, 8 , 1),
    author: 'J. R. R. Tolkien',
    numberOfStars: 5,
    category: 'Fantasy'
  }

  bookInterface2: Book = {
    id:2,
    title: 'The Lord of the Rings',
    description: 'The Hobbit, The Fellowship of the Ring',
    dateCreated: new Date(1959, 6 , 1),
    author: 'J. R. R. Tolkien',
    numberOfStars: 5,
    category: 'Fantasy'
  }

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

  userSayHello = new User(10, 'Danijela', 'danijela@danijela.com', '+381/1212121');
  productSayHello = new Product(14, 'phone', 200, 'samsung s20');
  customerSayHello = new Customer(22, 'Petar', 'petar@petar.com', '+381/454545', new Address('Despota Stefana', 5, 'Belgrade', 'Serbia'));
  employeeSayHello = new Employee(4, 'Milica', 'milica@milica.com', '+381/6868680', 'Data Analyst');

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

    console.log(this.baseEntity);
    console.log('Classes are the fundamental entities used to create reusable components. It is a group of objects which have common properties. It can contain properties like fields, methods, constructors, etc. An Interface defines a structure which acts as a contract in our application.')

    this.userSayHello.sayHello();
    this.productSayHello.sayHello();
    this.customerSayHello.sayHello();
    this.employeeSayHello.sayHello();

    console.log(this.postInterface1);
    console.log(this.postInterface2);

    console.log(this.bookInterface1);
    console.log(this.bookInterface2);
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
