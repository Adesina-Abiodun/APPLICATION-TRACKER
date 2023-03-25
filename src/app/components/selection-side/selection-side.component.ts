import { Component, OnDestroy, EventEmitter, Output } from '@angular/core';
import { NavigationStart, Router, Event as NavigationEnd } from '@angular/router';
import { JobsComponent } from 'src/app/job-routing/jobs/jobs.component';
import { JobPageComponent } from 'src/app/pages/job-page/job-page.component';
@Component({
  selector: 'app-selection-side',
  templateUrl: './selection-side.component.html',
  styleUrls: ['./selection-side.component.css']
})
export class SELECTIONSIDEComponent implements OnDestroy {

  isFilter = true;
  searchText!: string;
  selectByNo!: number;
  selectByRecent!: string[];
  selectByCategory!: string[];
  selectByRating!: string[];
  selectByTags!: string[];
  
  enteredSearchValue: string = '';
  selectedOptionValue: string = 'All';
  selectedNumber: number = 25;
 

  constructor(private route: Router){
    let url = this.route.events.subscribe({
    next: (event: any) => {

      if (event instanceof NavigationStart){
          if( event.url == '/jobs/my-profile'){
              this.isFilter = false
              console.log(event.url)
          }else{
            this.isFilter = true
          }
      }
    }
    })
  
}
ngOnDestroy(): void{
  this.isFilter = true
}



  @Output() searchTextChange = new EventEmitter(); 
  onSearchTextChanged(event: any){
    this.searchTextChange.emit(event.target.value);
    // console.log(this.enteredSearchValue);
  }

  @Output()
  OptionChanged: EventEmitter<string> = new EventEmitter<string>();
  onOptionChanged(){
    this.OptionChanged.emit(this.selectedOptionValue);
    console.log(this.selectedOptionValue);
    
  }

 @Output() NumberChanged: EventEmitter<number> = new EventEmitter<number>();
  onNumberChanged(){
     this.NumberChanged.emit(this.selectedNumber);
  }

}
