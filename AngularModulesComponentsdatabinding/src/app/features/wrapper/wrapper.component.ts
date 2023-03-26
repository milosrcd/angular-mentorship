import { BookDetails } from 'src/app/models/bookdetails.model';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.enum';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  bookId: string | null = '';

  books: BookDetails[] = [
    {
      id: 1,
      imgSrc: '../../../../assets/images/moneypower.jpg',
      title: 'Money Power',
      author: 'Name Surename',
      year: 1998,
      category: Category.General,
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam iure facere molestiae ducimus commodi dignissimos corrupti accusantium deserunt minima enim'
    },
    {
      id: 2,
      imgSrc: '../../../../assets/images/myfirstlove.jpg',
      title: 'My First Love',
      author: 'Name Surename',
      year: 2000,
      category: Category.General,
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam iure facere molestiae ducimus commodi dignissimos corrupti accusantium deserunt minima enim'
    },
    {
      id: 3,
      imgSrc: '../../../../assets/images/mylittlelove.jpg',
      title: 'My Litle Life',
      author: 'Name Surename',
      year: 2005,
      category: Category.General,
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam iure facere molestiae ducimus commodi dignissimos corrupti accusantium deserunt minima enim'
    },
    {
      id: 4,
      imgSrc: '../../../../assets/images/thelosttrip.jpg',
      title: 'The Lost Trip',
      author: 'Name Surename',
      year: 2008,
      category: Category.History,
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam iure facere molestiae ducimus commodi dignissimos corrupti accusantium deserunt minima enim'
    },
    {
      id: 5,
      imgSrc: '../../../../assets/images/dark.jpg',
      title: 'Dark',
      author: 'Name Surename',
      year: 2018,
      category: Category.Fantasy,
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam iure facere molestiae ducimus commodi dignissimos corrupti accusantium deserunt minima enim'
    },
    {
      id: 6,
      imgSrc: '../../../../assets/images/findme.jpg.png',
      title: 'Find Me',
      author: 'Name Surename',
      year: 2021,
      category: Category.History,
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam iure facere molestiae ducimus commodi dignissimos corrupti accusantium deserunt minima enim'
    },


  ]

  constructor(private activatedRouter: ActivatedRoute) { }

  book?: BookDetails;

  ngOnInit(): void {

    // let bookId = this.activatedRouter.snapshot.paramMap.get('id');
    // this.bookId = bookId;

    // this.book = this.books.find(book => book.id.toString() === this.bookId);
  }

}
