import { Component, OnInit } from '@angular/core';
import { jobService} from 'src/app/service/jobService.service';
import { JobApplication } from '../../Models/my-application.module';

@Component({
  selector: 'app-my-application',
  templateUrl: './my-application.component.html',
  styleUrls: ['./my-application.component.css']
})

export class MyApplicationComponent implements OnInit {
     jobApplication: JobApplication[] = []

    constructor(private jobService: jobService){

    }

    ngOnInit(): void{
      this.jobApplication = this.jobService.getJobsApplication();
    }
}
