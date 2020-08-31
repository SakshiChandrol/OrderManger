import { NgModule,Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login-mod/login/login.component';

const routes: Routes = [
  { path:"",component:LoginComponent},
  { path: 'loginMod', loadChildren: () => import('./login-mod/login-mod.module').then(m => m.LoginModModule) },
  { path: 'userMod', loadChildren: () => import('./user-mod/user-mod.module').then(m => m.UserModModule) },
  { path: 'orderMod', loadChildren: () => import('./order-mod/order-mod.module').then(m => m.OrderModModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
