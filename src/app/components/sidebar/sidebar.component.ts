import { Component, OnDestroy } from '@angular/core';
import { NavigationStart, Router, Event as NavigationEnd } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
// import { LogoutPopUpComponent } from '../../Modal/logout-pop-up/logout-pop-up.component';




@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SIDEBARComponent implements OnDestroy {
  
  isFilter = false;
  title = 'angular-material'


 

  constructor(private route: Router, private dialogRef: MatDialog){
    let url = this.route.events.subscribe({
    next: (event: any) => {

      if (event instanceof NavigationStart){
          if( event.url == '/jobs/my-profile'){
              this.isFilter = true
              console.log(event.url)
          }

          else{
            this.isFilter = false
          }

        
      }
    }
    })
  
}

openDialog(){
  // this.dialogRef.open(LogoutPopUpComponent)
}

ngOnDestroy(): void{
  this.isFilter = false
}


}
