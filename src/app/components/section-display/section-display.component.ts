import { Component, OnDestroy } from '@angular/core';
import { NavigationStart, Router, Event as NavigationEnd } from '@angular/router';

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
              console.log(event.url)
            }

          else if( event.url == '/jobs/my-offer'){
            this.isFilter = ['My Offers']
            console.log(event.url)
          }

          else if( event.url == '/jobs/my-jobs'){
            this.isFilter = ['Jobs']
            console.log(event.url)
          }

          else if( event.url == '/jobs/my-profile'){
          this.isFilter = ['My Profile']
          console.log(event.url)
        }

          else if( event.url == '/jobs/my-history'){
          this.isFilter = ['My History']
          console.log(event.url)
        }
          else if( event.url == '/jobs'){
        this.isFilter = ['Jobs']
        console.log(event.url)
        }
  }}})}}
