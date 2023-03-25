import { Component } from '@angular/core';
import { JobListingService } from 'src/app/Service/job-listing.service';
import { JobApplication} from '../../Models/my-application.module';

@Component({
  selector: 'app-my-history',
  templateUrl: './my-history.component.html',
  styleUrls: ['../my-application/my-application.component.css']
})
export class MyHistoryComponent {
  jobApplications: JobApplication[];

  constructor(private jobListingService: JobListingService){
    this.jobApplications = jobListingService.getJobApplications();
  }
}
