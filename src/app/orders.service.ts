import { Injectable } from '@angular/core';
import{ HttpClient,HttpHeaders  } from "@angular/common/http";
import { Order } from './order';
import { Observable } from 'rxjs';
//import { NgxSpinnerService } from 'ngx-spinner';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor(private httpClient : HttpClient) {}
   getbyemail():Observable<Order[]>
   {
    return this.httpClient.get<Order[]>("http://localhost:3000/order");
   }

   getAllOrders():Observable<Order[]>
   {
    return this.httpClient.get<Order[]>("http://localhost:3000/order");
   }
   
   createOrder(newOrder:Order):Observable<Order>{
     return this.httpClient.post<Order>("http://localhost:3000/order",newOrder);
   }

   

   updateOrder(existingOrder: Order) : Observable<Order>
   {
     return this.httpClient.put<Order>("http://localhost:3000/order/"+existingOrder.id,existingOrder);
    
   }
   cancelOrder(cancellingOrder: Order) : Observable<Order>
   {
     return this.httpClient.put<Order>("http://localhost:3000/order/"+cancellingOrder.id,cancellingOrder);
    
   }
  
}
