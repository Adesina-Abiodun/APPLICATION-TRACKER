import { Component } from '@angular/core';
import { JobApplication} from '../../Models/my-application.module';

@Component({
  selector: 'app-my-history',
  templateUrl: './my-history.component.html',
  styleUrls: ['../my-application/my-application.component.css']
})
export class MyHistoryComponent {
  JobApplications : JobApplication[] = [
    {
        image: "../../assets/unsplash_DBe29bswzpk.png",
        companyName: "ABC Company",
        jobLevel: "Senior Product designer",
        country: "United Arab Emiates",
        proposedSalary: 10000000,
        skillSet: ['figma', 'Sketch', 'Adobe XD','Illustrator', 'Photoshop', 'InVision','WordPress', 'Anywhere 365', '3D Animations'],
        applicationDate: '25 days ago',
    },

    {
        image: "../../../assets/unsplash_5MlBMYDsGBY.png",
        companyName: "ABC Company",
        jobLevel: "Senior Product designer",
        country: "United Arab Emiates",
        proposedSalary: 10000000,
        skillSet: ['figma', 'Sketch', 'Adobe XD','Illustrator', 'Photoshop', 'InVision','WordPress', 'Anywhere 365', '3D Animations'],
        applicationDate: '25 days ago',
    },

    {
        image: "../../../assets/unsplash_7SPDdXRi1u4.png",
        companyName: "ABC Company",
        jobLevel: "Senior Product designer",
        country: "United Arab Emiates",
        proposedSalary: 10000000,
        skillSet: ['figma', 'Sketch', 'Adobe XD','Illustrator', 'Photoshop', 'InVision','WordPress', 'Anywhere 365', '3D Animations'],
        applicationDate: '25 days ago',
    }
  ]
}
