import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LmBladeComponent } from './lm-blade/lm-blade.component';
import { LmConquerorComponent } from './lm-conqueror/lm-conqueror.component';
import { LmKangarooComponent } from './lm-kangaroo/lm-kangaroo.component';
import { LmLincolnComponent } from './lm-lincoln/lm-lincoln.component';
import { LocationsComponent } from './locations/locations.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { OnBladeComponent } from './on-blade/on-blade.component';
import { OnConquerorComponent } from './on-conqueror/on-conqueror.component';
import { OnKangarooComponent } from './on-kangaroo/on-kangaroo.component';
import { OnLincolnComponent } from './on-lincoln/on-lincoln.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { SupportComponent } from './support/support.component';
import { TestDriveComponent } from './test-drive/test-drive.component';
import { Vixon2020Component } from './vixon2020/vixon2020.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'account', component: AccountComponent },
  { path: 'support', component: SupportComponent },
  { path: 'test-drive', component: TestDriveComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'on-kangaroo', component: OnKangarooComponent },
  { path: 'lm-kangaroo', component: LmKangarooComponent },
  { path: 'on-blade', component: OnBladeComponent },
  { path: 'lm-blade', component: LmBladeComponent },
  { path: 'on-lincoln', component: OnLincolnComponent },
  { path: 'lm-lincoln', component: LmLincolnComponent },
  { path: 'on-conqueror', component: OnConquerorComponent },
  { path: 'lm-conqueror', component: LmConquerorComponent },
  { path: 'vixon2020', component: Vixon2020Component },
  { path: 'contact', component: ContactComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'error', component: NotfoundComponent },
  { path: '**', redirectTo: 'error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }