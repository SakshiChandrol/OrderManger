import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderModComponent } from './order-mod.component';

describe('OrderModComponent', () => {
  let component: OrderModComponent;
  let fixture: ComponentFixture<OrderModComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderModComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
