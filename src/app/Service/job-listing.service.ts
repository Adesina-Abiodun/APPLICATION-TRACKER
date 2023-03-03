import { Injectable } from '@angular/core';
import { JobApplication } from '../Models/my-application.module';

@Injectable({
  providedIn: 'root'
})
export class JobListingService {
  private jobListings: JobApplication[] =
    [
      { 
        id: 1, 
        image: "../../assets/unsplash_DBe29bswzpk.png",
        companyName: "ABC Company",
        jobLevel: "Senior Product designer",
        country: "United Arab Emiates",
        proposedSalary: 10000000,
        skillSet: ['figma', 'Sketch', 'Adobe XD','Illustrator', 'Photoshop', 'InVision','WordPress', 'Anywhere 365', '3D Animations'],
        applicationDate: 'Applied 3 days ago',
      },
      {
        id: 2, 
        image: "../../assets/unsplash_DBe29bswzpk.png",
        companyName: "ATB TECH LTB",
        jobLevel: "Junior Product designer",
        country: "United States",
        proposedSalary: 500000,
        skillSet: ['figma', 'Sketch', 'Adobe XD','Illustrator', 'Photoshop', 'InVision','WordPress', 'Anywhere 365', '3D Animations'],
        applicationDate: 'Applied 3 days ago',
      },

      {
        id: 3, 
        image: "../../assets/unsplash_DBe29bswzpk.png",
        companyName: "SkillUp Africa",
        jobLevel: "Senior Product Manager",
        country: "South Africa",
        proposedSalary: 10000000,
        skillSet: ['figma', 'Sketch', 'Adobe XD','Illustrator', 'Photoshop', 'InVision','WordPress', 'Anywhere 365', '3D Animations'],
        applicationDate: 'Applied 3 days ago',
      },

      {
        id: 4, 
        image: "../../assets/unsplash_DBe29bswzpk.png",
        companyName: "ABC Company",
        jobLevel: "Senior Product designer",
        country: "United Arab Emiates",
        proposedSalary: 10000000,
        skillSet: ['figma', 'Sketch', 'Adobe XD','Illustrator', 'Photoshop', 'InVision','WordPress', 'Anywhere 365', '3D Animations'],
        applicationDate: 'Applied 3 days ago',
      },

      {
        id: 5, 
        image: "../../assets/unsplash_DBe29bswzpk.png",
        companyName: "ABC Company",
        jobLevel: "Senior Product designer",
        country: "United Arab Emiates",
        proposedSalary: 10000000,
        skillSet: ['figma', 'Sketch', 'Adobe XD','Illustrator', 'Photoshop', 'InVision','WordPress', 'Anywhere 365', '3D Animations'],
        applicationDate: 'Applied 3 days ago',
      },

      {
        id: 6, 
        image: "../../assets/unsplash_DBe29bswzpk.png",
        companyName: "ABC Company",
        jobLevel: "Senior Product designer",
        country: "United Arab Emiates",
        proposedSalary: 10000000,
        skillSet: ['figma', 'Sketch', 'Adobe XD','Illustrator', 'Photoshop', 'InVision','WordPress', 'Anywhere 365', '3D Animations'],
        applicationDate: 'Applied 3 days ago',
      }


     ]

  

  constructor() { }

  getJobApplications() {
    return this.jobListings;
  }

  getSeniorLevel(){
    return this.jobListings.filter(application => application.jobLevel === 'Senior').length;
  }

  searchText: string = ''; 
  optionButton: string = 'All';
  numberButton: number = 25;

  onSearchTextEntered(searchValue: any){
    // console.log(searchValue);
    
     this.searchText = searchValue;
    //  console.log(this.searchText);
  }
  onFilterOptionChanged(data: string){
     this.optionButton = data;
    //  console.log(this.optionButton);
  }
  onFilterNumberChanged(data: number){
    this.numberButton = data;
    // console.log(this.numberButton);
    
  }

}
