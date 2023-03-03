import { Component } from '@angular/core';
import { ProfileServiceService } from 'src/app/Service/profile-service.service';
import { ProjectEditComponent } from '../../project-edit/project-edit.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['../../../job-routing/my-profile/my-profile.component.css']
})
export class ProjectsComponent {


  constructor(private profileService: ProfileServiceService){
  }
  
  openModal(){
    this.profileService.openDialog(ProjectEditComponent)
  }
}
