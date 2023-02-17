import { Component } from '@angular/core';
import { JobApplication} from '../../Models/my-application.module';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {

  jobApplications : JobApplication[] = [

    {
      image: "../../../assets/unsplash_7SPDdXRi1u4.png",
      companyName: "ABC Company",
      jobLevel: "Senior Product designer",
      country: "United Arab Emiates",
      proposedSalary: 10000000,
      skillSet: ['figma', 'Sketch', 'Adobe XD','Illustrator', 'Photoshop', 'InVision','WordPress', 'Anywhere 365', '3D Animations'],
      applicationDate: 'Posted 8 hours ago',
    },
    {
      image: "../../../assets/unsplash_7SPDdXRi1u4.png",
      companyName: "ABC Company",
      jobLevel: "Senior Product designer",
      country: "United Arab Emiates",
      proposedSalary: 10000000,
      skillSet: ['figma', 'Sketch', 'Adobe XD','Illustrator', 'Photoshop', 'InVision','WordPress', 'Anywhere 365', '3D Animations'],
      applicationDate: 'Posted 8 hours ago',
    },
    {
      image: "../../../assets/unsplash_7SPDdXRi1u4.png",
      companyName: "ABC Company",
      jobLevel: "Senior Product designer",
      country: "United Arab Emiates",
      proposedSalary: 10000000,
      skillSet: ['figma', 'Sketch', 'Adobe XD','Illustrator', 'Photoshop', 'InVision','WordPress', 'Anywhere 365', '3D Animations'],
      applicationDate: 'Posted 8 hours ago',
    }
  ]
}
