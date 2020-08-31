import { Component, OnInit } from '@angular/core';
import { Order } from '../../order';
import { OrdersService } from "../../orders.service";

import { NotificationServiceService } from "../../notification.service.service";
import * as moment from 'moment';
@Component({
  selector: 'app-order-save',
  templateUrl: './order-save.component.html',
  styleUrls: ['./order-save.component.scss']
})
export class OrderSaveComponent implements OnInit {
newOrder:Order=new Order;
orders:Order[]=[];
modeOfTrans:any=["Ground Standard","Ground Express","Air Premium"];
orderStatus:any=["Created","Accepted","In Progress","Completed"];
oid:string;
todayDate=new Date();
minDate= moment(new Date()).format('YYYY-MM-DD')
desCity:string;
soucCity:string;
pDate:string;
dDate=moment(new Date()).format('YYYY-MM-DD');
  


  constructor(private ordersService:OrdersService ,private notifyService : NotificationServiceService) {
    
   }
   showToasterSuccess(){
    this.notifyService.showSuccess("Order Saved", "Status")
}



  ngOnInit(): void {
    this.oid="R-"+Math.floor(Math.random()*(999-100+1)+100);
    console.log(this.oid);
    this.newOrder.orderId=this.oid;
    console.log(this.minDate);
   }
  dData(desCity:string){
    this.desCity=desCity;
    console.log(this.desCity);
  }
  sourceData(soucCity:string){
    this.soucCity=soucCity;
    console.log(this.soucCity);
  }
   setMode()
  {
    if(this.desCity==this.soucCity)
    {
     return true;
      
    }
    else{
     return false;
    }
  }
  pickDate(pDate:string)
  {
    this.pDate=pDate;
    console.log(pDate);
  }
  DelDate(dDate:string)
  {
    this.dDate=dDate;
  }
  

  onSaveClick()
  {
    this.ordersService.createOrder(this.newOrder).subscribe((response) => {
      //Add Project to Grid
      var p: Order = new Order();
     // p.id=response.id;
      p.orderId = response.orderId; //response.orderId;
      p.orderDesc = response.orderDesc;
      p.orderShortName = response.orderShortName;
      p.orderRequester = response.orderRequester;
      p.contactNo = response.contactNo;
      p.emailId = response.emailId;
      p.orderCreationDate = response.orderCreationDate;
      p.orderPickupDate = response.orderPickupDate;
      p.orderDeliveryDate = response.orderDeliveryDate;
      p.goodsDescs = response.goodsDescs;
      p.weight = response.weight;
      p.sourceLocation = response.sourceLocation;
      p.sourceCity=response.sourceCity;
      p.destination = response.destination;
      p.destinationCity=response.destinationCity;
      p.modeOfTrans = response.modeOfTrans;
      p.orderStatus = response.orderStatus;
      this.orders.push(p);
      
      console.log(this.newOrder);

      //Clear New Project Dialog - TextBoxes
      //this.newOrder.id=null;
      this.newOrder.orderId=null;
      this.newOrder.orderDesc=null;
      this.newOrder.orderShortName=null;
      this.newOrder.orderRequester=null;
      this.newOrder.contactNo=null;
      this.newOrder.emailId=null;
      this.newOrder.orderCreationDate=null;
      this.newOrder.orderPickupDate=null;
      this.newOrder.orderDeliveryDate=null;
      this.newOrder.goodsDescs=null;
      this.newOrder.weight=null;
      this.newOrder.sourceLocation=null;
      this.newOrder.sourceCity=null;
      this.newOrder.destination=null;
      this.newOrder.destinationCity=null;
      this.newOrder.modeOfTrans=null;
      this.newOrder.orderStatus=null;
    }, (error) => {
      console.log(error);
    });

  }}
