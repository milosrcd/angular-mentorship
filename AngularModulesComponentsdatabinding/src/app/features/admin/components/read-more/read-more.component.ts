import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BookDetails } from 'src/app/features/models/book-details.model';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss']
})
export class ReadMoreComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: BookDetails,
    private dialogReference: MatDialogRef<ReadMoreComponent>
    ) {
    console.log('dialog read more', data);
  }

  close() {
    this.dialogReference.close('Dialog closed');
  }
}
