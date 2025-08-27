import { Routes } from '@angular/router';
import { DisplaydetailsComponent } from './displaydetails/displaydetails.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: '', component: DisplaydetailsComponent }, 
  { path: 'about', component: AboutComponent }, 
];
