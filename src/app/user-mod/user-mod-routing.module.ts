import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserModComponent } from './user-mod.component';
import { UserOrderComponent } from './user-order/user-order.component';
//import { UserOrderComponent } from '../user-order/user-order.component';

const routes: Routes = [{ path: '', component: UserModComponent },{
  path:"user/:username",component:UserOrderComponent
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserModRoutingModule { }
