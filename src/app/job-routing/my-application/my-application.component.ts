import { Component, OnInit } from '@angular/core';
// import { jobService} from 'src/app/service/jobService.service';
import { JobApplication } from '../../Models/my-application.module';

@Component({
  selector: 'app-my-application',
  templateUrl: './my-application.component.html',
  styleUrls: ['./my-application.component.css']
})

export class MyApplicationComponent implements OnInit {
     jobApplication: JobApplication[] = [
      {
        image: "../../assets/unsplash_DBe29bswzpk.png",
        companyName: "ABC Company",
        jobLevel: "Senior Product designer",
        country: "United Arab Emiates",
        proposedSalary: 10000000,
        skillSet: ['figma', 'Sketch', 'Adobe XD','Illustrator', 'Photoshop', 'InVision','WordPress', 'Anywhere 365', '3D Animations'],
        applicationDate: 'Applied 3 days ago',
      },
      {
        image: "../../assets/unsplash_DBe29bswzpk.png",
        companyName: "ABC Company",
        jobLevel: "Senior Product designer",
        country: "United Arab Emiates",
        proposedSalary: 10000000,
        skillSet: ['figma', 'Sketch', 'Adobe XD','Illustrator', 'Photoshop', 'InVision','WordPress', 'Anywhere 365', '3D Animations'],
        applicationDate: 'Applied 3 days ago',
      }
     ]

    // constructor(private jobService: jobService){

    // }

    ngOnInit(): void{
      // this.jobApplication = this.jobService.getJobsApplication();
    }
}
