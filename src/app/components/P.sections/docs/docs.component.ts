import { Component } from '@angular/core';
import { ProfileServiceService } from 'src/app/Service/profile-service.service';
import { DocumentsEditComponent } from '../../documents-edit/documents-edit.component';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['../../../job-routing/my-profile/my-profile.component.css']
})
export class DocsComponent {


  constructor(private profileService: ProfileServiceService){
  }
  
  openModal(){
    this.profileService.openDialog(DocumentsEditComponent)
  }
}
