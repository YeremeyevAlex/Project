import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { SupportComponent } from './support/support.component';
import { TestDriveComponent } from './test-drive/test-drive.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OnKangarooComponent } from './on-kangaroo/on-kangaroo.component';
import { LmKangarooComponent } from './lm-kangaroo/lm-kangaroo.component';
import { OnBladeComponent } from './on-blade/on-blade.component';
import { LmBladeComponent } from './lm-blade/lm-blade.component';
import { OnLincolnComponent } from './on-lincoln/on-lincoln.component';
import { LmLincolnComponent } from './lm-lincoln/lm-lincoln.component';
import { OnConquerorComponent } from './on-conqueror/on-conqueror.component';
import { LmConquerorComponent } from './lm-conqueror/lm-conqueror.component';
import { Vixon2020Component } from './vixon2020/vixon2020.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { LocationsComponent } from './locations/locations.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    SupportComponent,
    TestDriveComponent,
    ContactUsComponent,
    OnKangarooComponent,
    LmKangarooComponent,
    OnBladeComponent,
    LmBladeComponent,
    OnLincolnComponent,
    LmLincolnComponent,
    OnConquerorComponent,
    LmConquerorComponent,
    Vixon2020Component,
    ContactComponent,
    PrivacyComponent,
    LocationsComponent,
    NotfoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }