import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginModComponent } from './login-mod.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
  path:"",component:LoginComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LoginModRoutingModule {
  
 }
