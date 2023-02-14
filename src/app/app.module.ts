import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { FOOTERComponent } from './components/footer/footer.component';
import { HEADERComponent } from './components/header/header.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { MyApplicationComponent } from './components/my-application/my-application.component';
import { MyHistoryComponent } from './components/my-history/my-history.component';
import { MyOfferComponent } from './components/my-offer/my-offer.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { SECTIONDISPLAYComponent } from './components/section-display/section-display.component';
import { SELECTIONSIDEComponent } from './components/selection-side/selection-side.component';
import { SIDEBARComponent } from './components/sidebar/sidebar.component';
import { JobPageComponent } from './pages/job-page/job-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';






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
    JobPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
