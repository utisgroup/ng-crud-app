import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { AppComponent } from './app.component';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path : 'home', component: HomeComponent },
  { path : 'customer-list', component: CustomerListComponent },
  { path : 'customer-info', component: CustomerInfoComponent },
  { path : 'customer-detail', component: CustomerDetailComponent },
  { path : 'view', component: CustomerDetailComponent },
  { path : 'delete', component: CustomerDetailComponent },
  { path : 'save', component: CustomerDetailComponent },
  { path : 'edit', component: PersonalDetailComponent },
  { path : 'login', component: LoginComponent },
  { path : 'logout', component: LogoutComponent },
  { path : '', component: AppComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
