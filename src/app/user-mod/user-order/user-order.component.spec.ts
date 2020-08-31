import { TestBed,async , inject, ComponentFixture} from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { UserOrderComponent } from './user-order.component';
import { ToastrModule } from 'ngx-toastr';
import {NgxPaginationModule} from "ngx-pagination";
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
//import { RouterModule } from '@angular/router';
describe('HttpClient testing UserOrderComponent',() =>{

let httpClient:HttpClient;
let httpTestingController:HttpTestingController;
let component: UserOrderComponent;
let fixture: ComponentFixture<UserOrderComponent>;
beforeEach(async(() => {
  TestBed.configureTestingModule({
    declarations: [ UserOrderComponent ],
    imports: [HttpClientTestingModule, ToastrModule.forRoot(),NgxPaginationModule,FormsModule,RouterTestingModule]
   
  })
  .compileComponents();
  httpClient=TestBed.get(HttpClient);
httpTestingController=TestBed.get(HttpTestingController);
fixture = TestBed.createComponent(UserOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
}));
// beforeEach(()=>{
// TestBed.configureTestingModule({


// });

// });

it('should be created:UserOrderComponent',() => {
expect(component).toBeTruthy();

});
it('should have a router outlet',()=>{
  const fixture = TestBed.createComponent(UserOrderComponent);
  const app = fixture.componentInstance;
  let de= fixture.debugElement.query(By.directive(RouterOutlet));

  expect(de).not.toBeNull();
 });
});



