import { Injectable } from '@angular/core';
import { JobApplication } from '../Models/my-application.module';

@Injectable({
  providedIn: 'root'
})
export class jobService {

  private jobApplication: JobApplication[] = [
    {
    image: "../../assets/unsplash_DBe29bswzpk.png",
    companyName: "ABC Company",
    jobLevel: "Senior Product designer",
    country: "United Arab Emiates",
    proposedSalary: 10000000,
    skillSet: ['figma', 'Sketch', 'Adobe XD','Illustrator', 'Photoshop', 'InVision','WordPress', 'Anywhere 365', '3D Animations'],
    applicationDate: 'Applied 3 days ago',
  },
  
]

  constructor() { }

  public getJobsApplication() : JobApplication[]{
    return this.jobApplication
  }
}
