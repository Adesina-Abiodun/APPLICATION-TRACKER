import { Component } from '@angular/core';
import { ProfileServiceService } from 'src/app/Service/profile-service.service';
import { AboutMeEditComponent } from '../../about-me-edit/about-me-edit.component';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['../../../job-routing/my-profile/my-profile.component.css']
})
export class AboutMeComponent {


  
constructor(private aboutMeService: ProfileServiceService){
}

openModal(){
  this.aboutMeService.openDialog(AboutMeEditComponent)
}
}
