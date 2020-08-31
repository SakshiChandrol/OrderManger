import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserModRoutingModule } from './user-mod-routing.module';
import { UserModComponent } from './user-mod.component';
import { UserOrderComponent } from './user-order/user-order.component';
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
  declarations: [UserModComponent,UserOrderComponent],
  imports: [
    CommonModule,
    UserModRoutingModule,HttpClientModule,
    //AppRoutingModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
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
  exports:[UserOrderComponent]
})
export class UserModModule { }
