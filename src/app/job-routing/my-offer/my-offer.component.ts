import { Component } from '@angular/core';
import { JobListingService } from 'src/app/Service/job-listing.service';
import { JobApplication} from '../../Models/my-application.module';

@Component({
  selector: 'app-my-offer',
  templateUrl: './my-offer.component.html',
  styleUrls: ['./my-offer.component.css','../my-application/my-application.component.css']
})
export class MyOfferComponent {
  jobApplications: JobApplication[];

    constructor(private jobListingService: JobListingService){
      this.jobApplications = jobListingService.getJobApplications();
    }
}
