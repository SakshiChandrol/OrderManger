import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../../order';
import { OrdersService } from '../../orders.service';


@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.scss']
})
export class UserOrderComponent implements OnInit {
  orders: Order[];
  userorders: Order[]=[];
  buyer:string;
  o:Order;
  
 
  constructor(private list:OrdersService,private route: ActivatedRoute,
    private activatedroute: ActivatedRoute
  ) {
    this.activatedroute.params.subscribe(data => {
      
      
       })
  }
  ngOnInit(): void {
   
    //  console.log(name+"name");
    this.list.getbyemail().subscribe(
      (response:Order[]) => {
        this.orders=response;
       this.getUserorder();
      });

      const name = this.route.snapshot.paramMap.get('username');
      this.buyer=name;
        }
  
  getUserorder(){
    var l=this.orders.length;
   
    for(let j=0;j<l;j++)
    
      if( this.buyer==this.orders[j].orderRequester)
      {this.o=this.orders[j];
        this.userorders.push(this.o);
      }

  }
  }

