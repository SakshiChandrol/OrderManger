import { Component, OnInit } from '@angular/core';
import { OrdersService } from "../../orders.service";
import { Order } from "../../order";
import { NotificationServiceService } from "../../notification.service.service";
import * as moment from 'moment';



@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  orderStatus=["Created","Accepted","In Progress","Completed"]; 
//orders:Order[];
boxcheck:number ;
desCity:string;
soucCity:string;
toggleBool1: boolean=true;
toggleBool2: boolean=true;
editIndex:number=null;
editOrder:Order=new Order();
orders:Order[]=[];
i:number;
checked: boolean = true;
cancelIndex:number=null;
cancelOrder:Order=new Order();
pageIndex:number = 0;
minDate= moment(new Date()).format('YYYY-MM-DD')
   

  ngOnInit(): void {
 //get list of orders
    this.ordersService.getAllOrders().subscribe(
      (response:Order[]) => {
        this.orders=response;
      });
    
}
  constructor(private ordersService:OrdersService,private notifyService : NotificationServiceService)  {
  }
  totalRec : number;
  page: number = 1;
  allOrder: any;
  
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
  
  
  getLatestOrder(){
      this.ordersService.getAllOrders().subscribe((response)=>{
       this.allOrder=response
       this.totalRec=this.allOrder.length;
      }) 
    }
  
  //toggle buttons(change)="changeEventEdit($event)"
  changeEventEdit(event) {
         if (event.target.checked) {
             this.toggleBool1= false;
             console.log("toggleBool1"+this.toggleBool1);
         }
         else {
             this.toggleBool1= true;
         }
     }
     changeEventCancel(event) {
      if (event.target.checked) {

          this.toggleBool2= false;
          console.log("toggleBool2"+this.toggleBool1);
      }
      else {
          this.toggleBool2= true;
      }
  }
  
  showToasterSuccess(){
    this.notifyService.showSuccess("Order Updated", "Status")
}

  onEditClick(event,i:number)
  { 
    this.editOrder.id=this.orders[i].id;
    this.editOrder.orderId=this.orders[i].orderId;
    this.editOrder.orderDesc=this.orders[i].orderDesc;
    this.editOrder.orderShortName=this.orders[i].orderShortName;
    this.editOrder.orderRequester=this.orders[i].orderRequester;
    this.editOrder.emailId=this.orders[i].emailId;
    this.editOrder.contactNo=this.orders[i].contactNo;
    this.editOrder.orderCreationDate=this.orders[i].orderCreationDate;
    this.editOrder.orderPickupDate=this.orders[i].orderPickupDate;
    this.editOrder.orderDeliveryDate=this.orders[i].orderDeliveryDate;
    this.editOrder.goodsDescs=this.orders[i].goodsDescs;
    this.editOrder.weight=this.orders[i].weight;
    this.editOrder.sourceLocation=this.orders[i].sourceLocation;
    this.editOrder.destination=this.orders[i].destination;
    this.editOrder.sourceCity=this.orders[i].sourceCity;
    this.editOrder.destinationCity=this.orders[i].destinationCity;
    // this.editOrder.sourceLocation=this.orders[i].sourceLocation;
    // this.editOrder.destination=this.orders[i].destination;
    this.editOrder.modeOfTrans=this.orders[i].modeOfTrans;
    this.editOrder.orderStatus=this.orders[i].orderStatus;
    this.editIndex=i;
    console.log("i"+i+"editIndex"+this.editIndex);
    console.log(this.editOrder);

  }
  onUpdateClick()
{
  this.ordersService.updateOrder(this.editOrder).subscribe((response:Order) => {
    
    var p:Order=new Order();
    p.id=response.id;
    p.orderId=response.orderId;
    console.log(p);
    p.orderDesc=response.orderDesc;
    console.log(p);
    p.orderShortName=response.orderShortName;
    p.orderRequester=response.orderRequester;
    p.emailId=response.emailId;
    p.contactNo=response.contactNo;
    p.orderCreationDate=response.orderCreationDate;
    p.orderPickupDate=response.orderPickupDate;
    p.orderDeliveryDate=response.orderDeliveryDate;
    p.goodsDescs=response.goodsDescs;
    p.weight=response.weight;
    p.sourceLocation=response.sourceLocation;
    p.sourceCity=response.sourceCity;
    p.destination=response.destination;
    p.destinationCity=response.destinationCity;
    p.modeOfTrans=response.modeOfTrans;
    p.orderStatus=response.orderStatus;

    this.orders[this.editIndex]=p;
    console.log(this.orders)

     //Clear New Project Dialog - TextBoxes
     this.editOrder.orderId=null;
     this.editOrder.orderDesc=null;
     this.editOrder.orderShortName=null;
     this.editOrder.orderRequester=null;
     this.editOrder.contactNo=null;
     this.editOrder.emailId=null;
     this.editOrder.orderCreationDate=null;
     this.editOrder.orderPickupDate=null;
     this.editOrder.orderDeliveryDate=null;
     this.editOrder.goodsDescs=null;
     this.editOrder.weight=null;
     this.editOrder.sourceLocation=null;
     this.editOrder.sourceCity=null;
     this.editOrder.destination=null;
     this.editOrder.destinationCity=null;
     this.editOrder.modeOfTrans=null;
     this.editOrder.orderStatus=null;
  }, (error) => {
    console.log(error);
  });

}
onCancelClick(event,i:number)
  { 
    this.cancelOrder.id=this.orders[i].id;
    this.cancelOrder.orderId=this.orders[i].orderId;
    this.cancelOrder.orderDesc=this.orders[i].orderDesc;
    this.cancelOrder.orderShortName=this.orders[i].orderShortName;
    this.cancelOrder.orderRequester=this.orders[i].orderRequester;
    this.cancelOrder.emailId=this.orders[i].emailId;
    this.cancelOrder.contactNo=this.orders[i].contactNo;
    this.cancelOrder.orderCreationDate=this.orders[i].orderCreationDate;
    this.cancelOrder.orderPickupDate=this.orders[i].orderPickupDate;
    this.cancelOrder.orderDeliveryDate=this.orders[i].orderDeliveryDate;
    this.cancelOrder.goodsDescs=this.orders[i].goodsDescs;
    this.cancelOrder.weight=this.orders[i].weight;
    this.cancelOrder.sourceLocation=this.orders[i].sourceLocation;
    this.cancelOrder.destination=this.orders[i].destination;
    this.cancelOrder.sourceLocation=this.orders[i].sourceLocation;
    this.cancelOrder.destination=this.orders[i].destination;
    this.cancelOrder.sourceLocation=this.orders[i].sourceLocation;
    this.cancelOrder.destination=this.orders[i].destination;
    this.cancelOrder.modeOfTrans=this.orders[i].modeOfTrans;
    this.cancelOrder.orderStatus="Cancelled";
    this.cancelIndex=i;
    console.log("i"+i+"editIndex"+this.cancelIndex);
    console.log(this.cancelOrder);
    this.onClick();

  }
  onClick()
{
  this.ordersService.updateOrder(this.cancelOrder).subscribe((response:Order) => {
    
    var p:Order=new Order();
    p.id=response.id;
    p.orderId=response.orderId;
    console.log(p);
    p.orderDesc=response.orderDesc;
    console.log(p);
    p.orderShortName=response.orderShortName;
    p.orderRequester=response.orderRequester;
    p.emailId=response.emailId;
    p.orderCreationDate=response.orderCreationDate;
    p.orderPickupDate=response.orderPickupDate;
    p.orderDeliveryDate=response.orderDeliveryDate;
    p.goodsDescs=response.goodsDescs;
    p.weight=response.weight;
    p.sourceLocation=response.sourceLocation;
    p.sourceCity=response.sourceCity;
    p.destination=response.destination;
    p.destinationCity=response.destinationCity;
    p.modeOfTrans=response.modeOfTrans;
    p.orderStatus="Cancelled";

    this.orders[this.cancelIndex]=p;
    console.log(this.orders)

     //Clear New Project Dialog - TextBoxes
     this.cancelOrder.orderId=null;
     this.cancelOrder.orderDesc=null;
     this.cancelOrder.orderShortName=null;
     this.cancelOrder.orderRequester=null;
     this.cancelOrder.contactNo=null;
     this.cancelOrder.emailId=null;
     this.cancelOrder.orderCreationDate=null;
     this.cancelOrder.orderPickupDate=null;
     this.cancelOrder.orderDeliveryDate=null;
     this.cancelOrder.goodsDescs=null;
     this.cancelOrder.weight=null;
     this.cancelOrder.sourceLocation=null;
     this.cancelOrder.sourceCity=null;
     this.cancelOrder.destination=null;
     this.cancelOrder.destinationCity=null;
     this.cancelOrder.modeOfTrans=null;
     this.cancelOrder.orderStatus=null;
  }, (error) => {
    console.log(error);
  });

}

}



