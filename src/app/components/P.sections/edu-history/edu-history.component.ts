import { Component } from '@angular/core';
import { ProfileServiceService } from 'src/app/Service/profile-service.service';
import { EducationInfoEditComponent } from '../../../modals/education-info-edit/education-info-edit.component';

@Component({
  selector: 'app-edu-history',
  templateUrl: './edu-history.component.html',
  styleUrls: ['../../../job-routing/my-profile/my-profile.component.css']
})
export class EduHistoryComponent {

  constructor(private profileService: ProfileServiceService){
  }
  
  openModal(){
    this.profileService.openDialog(EducationInfoEditComponent)
  }

}
