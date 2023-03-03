import { Component, OnInit } from '@angular/core';
import { MyApplicationComponent } from 'src/app/job-routing/my-application/my-application.component';
import { JobApplication } from 'src/app/Models/my-application.module';
import { JobListingService } from 'src/app/Service/job-listing.service';


@Component({
  selector: 'app-job-page',
  templateUrl: './job-page.component.html',
  styleUrls: ['./job-page.component.css']
})
export class JobPageComponent implements OnInit {
  

  searchText: string = ''; 
  optionButton: string = 'All';
  numberButton: number = 30;

  constructor(private jobListingService: JobListingService){
  }

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
