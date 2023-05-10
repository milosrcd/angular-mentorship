import { Pipe, PipeTransform } from '@angular/core';
import { BookDetails } from 'src/app/features/models/book-details.model';

@Pipe({
  name: 'fullName',
  pure: false
})
export class FullNamePipe implements PipeTransform {

  transform(book: BookDetails): string {
    return `${book.authorFirstName} ${book.authorLastName}`
  }

}
