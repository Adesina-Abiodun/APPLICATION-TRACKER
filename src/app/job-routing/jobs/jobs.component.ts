import { Component } from '@angular/core';
import { JobListingService } from 'src/app/Service/job-listing.service';
import { JobApplication} from '../../Models/my-application.module';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['../my-application/my-application.component.css']
})
export class JobsComponent {

  jobApplications: JobApplication[];

  constructor(private jobListingService: JobListingService){
    this.jobApplications = jobListingService.getJobApplications();
  }
}
