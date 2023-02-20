import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JobsComponent } from './jobs/jobs.component';
import { JobPageComponent } from '../pages/job-page/job-page.component';
import { MyApplicationComponent } from './my-application/my-application.component';
import { MyHistoryComponent } from './my-history/my-history.component';
import { MyOfferComponent } from './my-offer/my-offer.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

const routes: Routes = [
  {path: '', component: JobPageComponent ,children : [
    {path: 'my-application', component: MyApplicationComponent},
    {path: 'my-offer', component: MyOfferComponent},
    {path: 'my-jobs', component: JobsComponent},
    {path: 'my-profile', component: MyProfileComponent},
    {path: 'my-history', component: MyHistoryComponent},
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingRoutingModule { }
