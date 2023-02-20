import { Component, OnDestroy } from '@angular/core';
import { NavigationStart, Router, Event as NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-selection-side',
  templateUrl: './selection-side.component.html',
  styleUrls: ['./selection-side.component.css']
})
export class SELECTIONSIDEComponent implements OnDestroy {

  isFilter = true;

 

  constructor(private route: Router){
    let url = this.route.events.subscribe({
    next: (event: any) => {

      if (event instanceof NavigationStart){
          if( event.url == '/jobs/my-profile'){
              this.isFilter = false
              console.log(event.url)
          }

          else{
            this.isFilter = true
          }

        
      }
    }
    })
  
}
ngOnDestroy(): void{
  this.isFilter = true
}
}
