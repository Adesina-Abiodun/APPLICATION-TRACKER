import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HEADERComponent } from './header/header.component';
import { SECTIONDISPLAYComponent } from './section-display/section-display.component';
import { SELECTIONSIDEComponent } from './selection-side/selection-side.component';
import { SIDEBARComponent } from './sidebar/sidebar.component';
import { CHILDSECTIONComponent } from './child-section/child-section.component';
import { FOOTERComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HEADERComponent,
    SECTIONDISPLAYComponent,
    SELECTIONSIDEComponent,
    SIDEBARComponent,
    CHILDSECTIONComponent,
    FOOTERComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
