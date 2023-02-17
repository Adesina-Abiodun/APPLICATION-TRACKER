import { Component } from '@angular/core';
import { JobApplication} from '../../Models/my-application.module';

@Component({
  selector: 'app-my-offer',
  templateUrl: './my-offer.component.html',
  styleUrls: ['./my-offer.component.css']
})
export class MyOfferComponent {
  JobApplications : JobApplication[] = [
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
      image: "../../../assets/unsplash_5MlBMYDsGBY.png",
      companyName: "ABC Company",
      jobLevel: "Senior Product designer",
      country: "United Arab Emiates",
      proposedSalary: 10000000,
      skillSet: ['figma', 'Sketch', 'Adobe XD','Illustrator', 'Photoshop', 'InVision','WordPress', 'Anywhere 365', '3D Animations'],
      applicationDate: 'Applied 3 days ago',
    }
  ]
}
