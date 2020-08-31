import { TestBed,async , inject} from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Order } from './order';
import { OrdersService } from './orders.service';

describe('OrdersService',() =>{
    let basicUrl;
    let mockOrders: Order[];
    let mockPost:Order=new Order();
    let httpTestingController:HttpTestingController;
    let service: OrdersService;
    let httpClient:HttpClient;
  
    beforeEach(()=>{
      basicUrl = 'http://localhost:3000';
      mockPost ={ "modeOfTrans": "Ground Standard",
                  "orderStatus": "Created",
                  "id": "5",
                  "orderId": "R-423",
                  "orderDesc": "test1",
                  "orderShortName": "test1",
                  "orderRequester": "Sakshi",
                  "contactNo": "8989889899",
                  "emailId": "sakshi@gmail.com",
                  "orderCreationDate": "2020-08-26",
                  "orderPickupDate": "2020-08-28",
                  "orderDeliveryDate": "2020-09-05",
                  "goodsDescs": "test",
                  "weight": "5",
                  "sourceLocation": "h. no 2",
                  "sourceCity": "test",
                  "destination": "h no.3",
                  "destinationCity": "test" };
      mockOrders = [{
                    "modeOfTrans": "Ground Standard",
                    "orderStatus": "Cancelled",
                    "id": "1",
                    "orderId": "R-743",
                    "orderDesc": "Hand Sanitizers",
                    "orderShortName": "Hand Sanitizer",
                    "orderRequester": "Sakshi",
                    "contactNo": "7389493428",
                    "emailId": "sakshi.19c@gmail.com",
                    "orderCreationDate": "2020-08-17",
                    "orderPickupDate": "2020-08-17",
                    "orderDeliveryDate": "2020-08-22",
                    "goodsDescs": "HealthCare",
                    "weight": "1",
                    "sourceLocation": "H. no.12 xyz street",
                    "sourceCity": null,
                    "destination": "H. no. 13 abc street",
                    "destinationCity": null
                  },
                  {
                    "modeOfTrans": "Ground Express",
                    "orderStatus": "Cancelled",
                    "id":"2" ,
                    "orderId": "R-988",
                    "orderDesc": "Hand Gloves",
                    "orderShortName": "Gloves",
                    "orderRequester": "Anshul",
                    "contactNo": "7389493428",
                    "emailId": "anshul@gmail.com",
                    "orderCreationDate": "2020-08-17",
                    "orderPickupDate": "2020-08-17",
                    "orderDeliveryDate": "2020-08-20",
                    "goodsDescs": "Personal Care",
                    "weight": "2",
                    "sourceLocation": "H. no.13 ayx street",
                    "sourceCity": null,
                    "destination": "h. no. 14 abc street",
                    "destinationCity": null
                  },
                  {
                    "modeOfTrans": "Air Premium",
                    "orderStatus": "Cancelled",
                    "id": "3",
                    "orderId": "R-816",
                    "orderDesc": "Hp Laptop",
                    "orderShortName": "Laptop",
                    "orderRequester": "Anshul",
                    "contactNo": "8989039998",
                    "emailId": "anshul@gmail.com",
                    "orderCreationDate": "2020-08-17",
                    "orderPickupDate": "2020-08-17",
                    "orderDeliveryDate": "2020-08-18",
                    "goodsDescs": "64 bits hp laptop",
                    "weight": "3",
                    "sourceLocation": "H. no.14 ayx street",
                    "sourceCity": null,
                    "destination": "h. no. 15 abc street",
                    "destinationCity": null
                  },
                  {
                    "modeOfTrans": "Ground Standard",
                    "orderStatus": "Created",
                    "id": "4",
                    "orderId": "R-422",
                    "orderDesc": "test",
                    "orderShortName": "test",
                    "orderRequester": "Sakshi",
                    "contactNo": "8989889899",
                    "emailId": "sakshi@gmail.com",
                    "orderCreationDate": "2020-08-26",
                    "orderPickupDate": "2020-08-28",
                    "orderDeliveryDate": "2020-09-05",
                    "goodsDescs": "test",
                    "weight": "5",
                    "sourceLocation": "h. no 2",
                    "sourceCity": "test",
                    "destination": "h no.3",
                    "destinationCity": "test"
                  }
                  
];
    TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [OrdersService]
});
    service = TestBed.inject(OrdersService);
    httpClient=TestBed.inject(HttpClient);
    httpTestingController=TestBed.inject(HttpTestingController); 
});


    it('should be created:OrdersService', ()=>{
    expect(service).toBeTruthy();
    });

    it('should get the list of Orders', () => {
        service.getAllOrders().subscribe(order => {
        expect(order).toBe(mockOrders);
          
        });

        httpTestingController.expectOne({
          method: 'GET',
          url: `${basicUrl}/order`
        }).flush(mockOrders);

    });

      it('should add an order', () =>{

      service.createOrder(mockPost).subscribe(
          data => expect(data).toEqual(mockPost, 'should add the order'),
          fail
          );

        
        let url=`${basicUrl}/order`
        const req = httpTestingController.expectOne(url);
        expect(req.request.method).toEqual('POST');
        expect(req.request.body).toEqual(mockPost);

        
        req.flush(mockPost);

        httpTestingController.verify();
      });

it('should put the correct data', () => {
  service.updateOrder(  {
    "modeOfTrans": "Ground Standard",
    "orderStatus": "Created",
    "id": "4",
    "orderId": "R-422",
    "orderDesc": "test",
    "orderShortName": "test",
    "orderRequester": "Sakshi",
    "contactNo": "8989889899",
    "emailId": "sakshi@gmail.com",
    "orderCreationDate": "2020-08-26",
    "orderPickupDate": "2020-08-28",
    "orderDeliveryDate": "2020-09-05",
    "goodsDescs": "test",
    "weight": "5",
    "sourceLocation": "h. no 2",
    "sourceCity": "test",
    "destination": "h no.3",
    "destinationCity": "test"
  }).subscribe((data: any) => {
      expect(  {
        "modeOfTrans": "Ground Standard",
        "orderStatus": "Created",
        "id": "4",
        "orderId": "R-422",
        "orderDesc": "test",
        "orderShortName": "test",
        "orderRequester": "Sakshi",
        "contactNo": "8989889899",
        "emailId": "sakshi@gmail.com",
        "orderCreationDate": "2020-08-26",
        "orderPickupDate": "2020-08-28",
        "orderDeliveryDate": "2020-09-05",
        "goodsDescs": "test",
        "weight": "5",
        "sourceLocation": "h. no 2",
        "sourceCity": "test",
        "destination": "h no.3",
        "destinationCity": "test"
      }).toEqual(  {
        "modeOfTrans": "Ground Standard",
        "orderStatus": "Created",
        "id": "4",
        "orderId": "R-422",
        "orderDesc": "test",
        "orderShortName": "test",
        "orderRequester": "Sakshi",
        "contactNo": "8989889899",
        "emailId": "sakshi@gmail.com",
        "orderCreationDate": "2020-08-26",
        "orderPickupDate": "2020-08-28",
        "orderDeliveryDate": "2020-09-05",
        "goodsDescs": "test",
        "weight": "5",
        "sourceLocation": "h. no 2",
        "sourceCity": "test",
        "destination": "h no.3",
        "destinationCity": "test"
      });
    });

  const req = httpTestingController.expectOne(
    `${basicUrl}/order/4`,
    'put to api'
  );
  expect(req.request.method).toBe('PUT');

  req.flush({
    "modeOfTrans": "Ground Standard",
        "orderStatus": "Created",
        "id": "4",
        "orderId": "R-422",
        "orderDesc": "test",
        "orderShortName": "test",
        "orderRequester": "Sakshi",
        "contactNo": "8989889899",
        "emailId": "sakshi@gmail.com",
        "orderCreationDate": "2020-08-26",
        "orderPickupDate": "2020-08-28",
        "orderDeliveryDate": "2020-09-05",
        "goodsDescs": "test",
        "weight": "5",
        "sourceLocation": "h. no 2",
        "sourceCity": "test",
        "destination": "h no.3",
        "destinationCity": "test"
  });

  httpTestingController.verify();
});
}); 

  




  

