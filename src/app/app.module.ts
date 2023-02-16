import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


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
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
