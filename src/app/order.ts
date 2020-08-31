export class Order {
    
    orderId:string;
    orderDesc:string;
    orderShortName:string;
    orderRequester:string;
    contactNo:string;
    emailId:string;
    orderCreationDate:string;
    orderPickupDate:string;
    orderDeliveryDate:string;
    goodsDescs:string;
    weight:string;
    sourceLocation:string;
    sourceCity:string;
    destination:string;
    destinationCity:string;
    modeOfTrans:any=["Ground Standard","Ground Express","Air Premium"];
    orderStatus:any=["Created","Accepted","In Progress","Completed"];
    id:string;

    constructor(){
        this.id=null;
        this.orderId=null;
        this.orderDesc=null;
        this.orderShortName=null;
        this.orderRequester=null;
        this.contactNo=null;
        this.emailId=null;
        this.orderCreationDate=null;
        this.orderPickupDate=null;
        this.orderDeliveryDate=null;
        this.goodsDescs=null;
        this.weight=null;
        this.sourceLocation=null;
        this.sourceCity=null;
        this.destination=null;
        this.destinationCity=null;
        this.modeOfTrans=null;
        this.orderStatus=null;

      
    }
}
