import { Component } from '@angular/core';
// import { myApplication } from '../my-application/my-application.module';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent {
  isOpen = false
 
  
  openModal(){
    this.isOpen = !this.isOpen
  }
}
