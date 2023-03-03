import { Component } from '@angular/core';
import { ProfileServiceService } from 'src/app/Service/profile-service.service';
import { PersonalInfoComponent } from '../../../modals/personal-info/personal-info.component';

@Component({
  selector: 'app-profile-section1',
  templateUrl: './profile-section1.component.html',
  styleUrls: ['../../../job-routing/my-profile/my-profile.component.css']
})
export class ProfileSection1Component {


constructor(private profileService: ProfileServiceService){
}

openModal(){
  this.profileService.openDialog(PersonalInfoComponent)
}




}
