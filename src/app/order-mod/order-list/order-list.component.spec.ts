// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { OrderListComponent } from './order-list.component';

// describe('OrderListComponent', () => {
//   let component: OrderListComponent;
//   let fixture: ComponentFixture<OrderListComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ OrderListComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(OrderListComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });



import { TestBed,async , inject, ComponentFixture} from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { OrderListComponent } from './order-list.component';
import { ToastrModule } from 'ngx-toastr';
import {NgxPaginationModule} from "ngx-pagination";
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { OrdersService } from '../../orders.service';
//import { RouterModule } from '@angular/router';
describe('HttpClient testing OrderListComponent',() =>{

let httpClient:HttpClient;
let httpTestingController:HttpTestingController;
let component: OrderListComponent;
let fixture: ComponentFixture<OrderListComponent>;
beforeEach(async(() => {
  TestBed.configureTestingModule({
    declarations: [ OrderListComponent ],
    imports: [HttpClientTestingModule, ToastrModule.forRoot(),NgxPaginationModule,FormsModule,RouterTestingModule]
   
  })
  .compileComponents();
  httpClient=TestBed.get(HttpClient);
httpTestingController=TestBed.get(HttpTestingController);
fixture = TestBed.createComponent(OrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
}));


it('should be created:OrderListComponent',() => {
expect(component).toBeTruthy();

});

});