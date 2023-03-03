import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Guard/auth.guard';
import { AccountCreatedComponent } from './pages/account-created/account-created.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { JobDescriptionComponent } from './pages/job-description/job-description.component';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';




const appRoutes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'accountCreated', component: AccountCreatedComponent},
  {path: 'job-description', component: JobDescriptionComponent, canActivate:[AuthGuard]},
  {path: 'signup', component: SignupPageComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'change-password', component: ChangePasswordComponent},
  {path: 'jobs', loadChildren: () => import('./job-routing/job-routing.module').then((s) => s.JobRoutingModule)},
  {path: '**', component: LoginPageComponent}

]
 

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
