import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { OrderModRoutingModule } from './order-mod-routing.module';
//import { OrderModComponent } from './order-mod.component';
import { OrderListComponent } from './order-list/order-list.component';
import { HomeComponent } from './home/home.component';
//import { OrderCancelComponent } from './order-cancel/order-cancel.component';
import { OrderSaveComponent } from './order-save/order-save.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [OrderListComponent,HomeComponent,
    OrderSaveComponent,HeaderComponent],
  imports: [
    CommonModule,
    OrderModRoutingModule,
    HttpClientModule,
    //AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule, 
    MatFormFieldModule, 
    MatCheckboxModule, 
    MatDatepickerModule, 
    MatRadioModule, 
    MatSelectModule,
    MatPaginatorModule,
    NgxPaginationModule,
    MatSortModule,
  ],
  exports:[
    OrderListComponent,HomeComponent,OrderSaveComponent,HeaderComponent
  ]
})
export class OrderModModule { }
