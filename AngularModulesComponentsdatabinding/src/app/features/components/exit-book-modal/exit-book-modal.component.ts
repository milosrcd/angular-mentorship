import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-exit-book-modal',
  templateUrl: './exit-book-modal.component.html',
  styleUrls: ['./exit-book-modal.component.scss']
})
export class ExitBookModalComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ExitBookModalComponent>) { }

  closeOk() {
    this.dialogRef.close(true);
  }

  closeCancel() {
    this.dialogRef.close(false);
  }


  ngOnInit(): void {
  }

}
