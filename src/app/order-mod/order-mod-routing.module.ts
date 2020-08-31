import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderModComponent } from './order-mod.component';
import { OrderListComponent } from './order-list/order-list.component';
import { HomeComponent } from './home/home.component';
//import { OrderCancelComponent } from './order-cancel/order-cancel.component';
import { OrderSaveComponent } from './order-save/order-save.component';

const routes: Routes = [{ path: '', component: OrderModComponent },
{
  path:"order",component:OrderListComponent
}, {
  path:"home",component:HomeComponent
}
//,{
//   path:"order/cancel",component:OrderCancelComponent
// }
,{
  path:"save",component:OrderSaveComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderModRoutingModule { }
