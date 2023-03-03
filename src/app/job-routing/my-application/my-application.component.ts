import { Component, OnInit, Input } from '@angular/core';
import { JobListingService } from 'src/app/Service/job-listing.service';
import { JobApplication } from '../../Models/my-application.module';

@Component({
  selector: 'app-my-application',
  templateUrl: './my-application.component.html',
  styleUrls: ['./my-application.component.css']
})

export class MyApplicationComponent implements OnInit {

  jobApplications: JobApplication[];

    constructor(private jobListingService: JobListingService){
      this.jobApplications = jobListingService.getJobApplications();
    }

   
    
  searchText: string = ''; 
  optionButton: string = 'All';
  numberButton: number = 25;

 

  onSearch(e: any){
    this.jobListingService.onSearchTextEntered(this.searchText);
  }

  onFilter(e: any){
    this.jobListingService.onFilterOptionChanged(this.optionButton);
  }

  onFilteredNum(e: any){
    this.jobListingService.onFilterNumberChanged(this.numberButton);
  }


  ngOnInit() {
    const numSenior = this.jobListingService.getSeniorLevel();
    // console.log(`There are ${numSenior} senior job applications.`);
  }
    
}
