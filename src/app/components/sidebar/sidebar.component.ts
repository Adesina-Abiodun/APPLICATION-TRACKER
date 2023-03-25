import { Component, OnDestroy } from '@angular/core';
import { NavigationStart, Router, Event as NavigationEnd } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
// import { LogoutPopUpComponent } from '../../Modal/logout-pop-up/logout-pop-up.component';
import * as alertify from 'alertifyjs';





@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SIDEBARComponent implements OnDestroy {
  
  isFilter = false;
  title = 'angular-material';
  url!: string;


 

  constructor(private route: Router){
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
  alertify.confirm('Logout', 'Do you want to logout?', function(){ alertify.success('See you soon...')}
                , function(){}).set('onok', () =>{
                  this.route.navigate(['']);
                })
                  

}

ngOnDestroy(): void{
  this.isFilter = false
}


}
