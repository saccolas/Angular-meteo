import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DisplayMeteoComponent } from './display-meteo/display-meteo.component';
import { TemperatureComponent } from './temperature/temperature.component';

const routes: Routes = [
  
  { path: 'meteo', component: DisplayMeteoComponent },
  { path: 'meteo/:id', component: TemperatureComponent },
  { path: '', redirectTo: 'meteo', pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
