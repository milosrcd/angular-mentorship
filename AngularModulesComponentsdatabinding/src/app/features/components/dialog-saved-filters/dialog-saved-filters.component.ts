import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-saved-filters',
  templateUrl: './dialog-saved-filters.component.html',
  styleUrls: ['./dialog-saved-filters.component.scss']
})
export class DialogSavedFiltersComponent {

  constructor(private dialogRef: MatDialogRef<DialogSavedFiltersComponent>) { }


  closeYes() {
    this.dialogRef.close(true);
   }

  closeNo() {
    this.dialogRef.close(false);
   }

}
