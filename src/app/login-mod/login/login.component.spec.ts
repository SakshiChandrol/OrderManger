import { TestBed,async , inject, ComponentFixture} from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { LoginComponent } from './login.component';
import { ToastrModule } from 'ngx-toastr';
import {NgxPaginationModule} from "ngx-pagination";
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
describe('HttpClient testing LoginComponent',() =>{

let httpClient:HttpClient;
let httpTestingController:HttpTestingController;
let component: LoginComponent;
let fixture: ComponentFixture<LoginComponent>;
beforeEach(async(() => {
  TestBed.configureTestingModule({
    declarations: [ LoginComponent ],
    imports: [HttpClientTestingModule, ToastrModule.forRoot(),NgxPaginationModule,FormsModule,RouterTestingModule]
   
  })
  .compileComponents();
  httpClient=TestBed.get(HttpClient);
httpTestingController=TestBed.get(HttpTestingController);
fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
}));
// beforeEach(()=>{
// TestBed.configureTestingModule({


// });

// });

it('should be created:LoginComponent',() => {
expect(component).toBeTruthy();

});
});


// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { LoginComponent } from './login.component';

// describe('LoginComponent', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ LoginComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
