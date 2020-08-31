

import { TestBed,async , inject, ComponentFixture} from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { OrderSaveComponent } from './order-save.component';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing';

describe('HttpClient testing OrderSaveComponent',() =>{

let httpClient:HttpClient;
let httpTestingController:HttpTestingController;
let component: OrderSaveComponent;
let fixture: ComponentFixture<OrderSaveComponent>;
beforeEach(async(() => {
  TestBed.configureTestingModule({
    declarations: [ OrderSaveComponent ],
    imports: [HttpClientTestingModule, ToastrModule.forRoot(),FormsModule,RouterTestingModule]
   
  })
  .compileComponents();
  httpClient=TestBed.get(HttpClient);
httpTestingController=TestBed.get(HttpTestingController);
fixture = TestBed.createComponent(OrderSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
}));


it('should be created:OrderSaveComponent',() => {
expect(component).toBeTruthy();

});

it('should be true if desCity and soucCity are same',()=>{
component.desCity==component.soucCity;
expect(component.setMode()).toBe(true);

})

});























