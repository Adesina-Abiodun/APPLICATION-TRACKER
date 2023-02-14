import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsComponent } from './components/jobs/jobs.component';
import { MyApplicationComponent } from './components/my-application/my-application.component';
import { MyHistoryComponent } from './components/my-history/my-history.component';
import { MyOfferComponent } from './components/my-offer/my-offer.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { JobPageComponent } from './pages/job-page/job-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';




const appRoutes: Routes = [
  {path: ' ', component: LoginPageComponent},
  {path: 'signup', component: SignupPageComponent},
  {path: 'jobs', loadChildren: () => import('./jobs/jobs.module').then((s) => s.JobsModule)},
  {path: 'jobs', component: JobPageComponent ,children : [
    {path: 'my-application', component: MyApplicationComponent},
    {path: 'my-offer', component: MyOfferComponent},
    {path: 'my-jobs', component: JobsComponent},
    {path: 'my-profile', component: MyProfileComponent},
    {path: 'my-history', component: MyHistoryComponent},
  ]}]
 

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
