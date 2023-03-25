import { Component } from '@angular/core';
import { ProfileServiceService } from 'src/app/Service/profile-service.service';
import { WorkExperienceEditComponent } from '../../work-experience-edit/work-experience-edit.component';

@Component({
  selector: 'app-work-exp',
  templateUrl: './work-exp.component.html',
  styleUrls: ['../../../job-routing/my-profile/my-profile.component.css']
})
export class WorkExpComponent {

  constructor(private profileService: ProfileServiceService){
  }
  
  openModal(){
    this.profileService.openDialog(WorkExperienceEditComponent)
  }

}
