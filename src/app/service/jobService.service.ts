import { Injectable } from '@angular/core';
import { JobApplication } from '../Models/my-application.module';

@Injectable({
  providedIn: 'root'
})
export class jobService {

  private jobApplication: JobApplication[] = [
    {
    image: "assests/logo.ng",
    companyName: "ABC Company",
    JobLevel: "Senior Product designer",
    country: "United State",
    proposedSalary: 10000000,
    skillSet: ['figma', 'figma', 'figma'],
    applicationDate: 'Applied 3 days ago',
  }
]

  constructor() { }

  public getJobsApplication() : JobApplication[]{
    return this.jobApplication
  }
}
