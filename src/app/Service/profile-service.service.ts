import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

  isOpen = false

  constructor(private dialog: MatDialog) { }

  openDialog(e: ComponentType<unknown>) {
    const dialogRef = this.dialog.open(e);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
