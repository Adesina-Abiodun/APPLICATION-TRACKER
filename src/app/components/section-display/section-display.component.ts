import { Component, OnDestroy } from '@angular/core';
import { NavigationStart, Router, Event as NavigationEnd } from '@angular/router';
import * as alertify from 'alertifyjs';
import { window } from 'rxjs';


@Component({
  selector: 'app-section-display',
  templateUrl: './section-display.component.html',
  styleUrls: ['./section-display.component.css']
})
export class SECTIONDISPLAYComponent {
  isFilter = ['Jobs']; 

 

  constructor(private route: Router){
    let url = this.route.events.subscribe({
    next: (event: any) => {

      if (event instanceof NavigationStart){
          if( event.url == '/jobs/my-application'){
              this.isFilter = ['My Applications']
            }

          else if( event.url == '/jobs/my-offer'){
            this.isFilter = ['My Offers']
          }

          else if( event.url == '/jobs/my-jobs'){
            this.isFilter = ['Jobs']
          }

          else if( event.url == '/jobs/my-profile'){
          this.isFilter = ['My Profile']
        }

          else if( event.url == '/jobs/my-history'){
          this.isFilter = ['My History']
        }
          else if( event.url == '/jobs'){
        this.isFilter = ['Jobs']
        }
  }
}
}
)}


openDialog(){
  alertify.confirm('Logout', 'Do you want to logout?', function(){ alertify.success("See you soon...")}
                , function(){}).set('onok', () =>{
                  this.route.navigate(['']);
                })
                
}



  


}
