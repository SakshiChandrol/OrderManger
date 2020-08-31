import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
////import { NgModule } from '@angular/core';
//import { FormsModule, } from '@angular/forms';

import { LoginModRoutingModule } from './login-mod-routing.module';
//import { LoginModComponent } from './login-mod.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginModRoutingModule,
    BrowserModule,
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
    LoginComponent
  ]
})
export class LoginModModule {

 }
