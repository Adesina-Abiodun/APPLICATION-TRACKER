import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatProgressBarModule} from '@angular/material/progress-bar'
import {MatDialogModule} from '@angular/material/dialog'


import { AppComponent } from './app.component';
import { FOOTERComponent } from './components/footer/footer.component';
import { HEADERComponent } from './components/header/header.component';
import { JobsComponent } from './job-routing/jobs/jobs.component';
import { SIDEBARComponent } from './components/sidebar/sidebar.component';
import { JobPageComponent } from './pages/job-page/job-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { SECTIONDISPLAYComponent } from './components/section-display/section-display.component';
import { SELECTIONSIDEComponent } from './components/selection-side/selection-side.component';
import { MyApplicationComponent } from './job-routing/my-application/my-application.component';
import { MyOfferComponent } from './job-routing/my-offer/my-offer.component';
import { MyProfileComponent } from './job-routing/my-profile/my-profile.component';
import { MyHistoryComponent } from './job-routing/my-history/my-history.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { JobDescriptionComponent } from './components/job-description/job-description.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { AboutMeEditComponent } from './components/about-me-edit/about-me-edit.component';
import { WorkExperienceEditComponent } from './components/work-experience-edit/work-experience-edit.component';
import { ProjectsEditComponent } from './components/projects-edit/projects-edit.component';
import { EducationInfoEditComponent } from './components/education-info-edit/education-info-edit.component';
import { DocumentsEditComponent } from './components/documents-edit/documents-edit.component';






@NgModule({
  declarations: [
    AppComponent,
    HEADERComponent,
    SECTIONDISPLAYComponent,
    SELECTIONSIDEComponent,
    SIDEBARComponent,
    FOOTERComponent,
    MyApplicationComponent,
    MyOfferComponent,
    JobsComponent,
    MyProfileComponent,
    MyHistoryComponent,
    LoginPageComponent,
    SignupPageComponent,
    JobPageComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    JobDescriptionComponent,
    PersonalInfoComponent,
    AboutMeEditComponent,
    WorkExperienceEditComponent,
    ProjectsEditComponent,
    EducationInfoEditComponent,
    DocumentsEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
