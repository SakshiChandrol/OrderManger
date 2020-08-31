import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../orders.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Order } from '../../order';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  alert:boolean=false;
  email:string;
  password:string;
  username:string;
  order:Order=new Order();
  orders: Order[];
  ngOnInit(): void {
    this.list.getbyemail().subscribe(
      (response:Order[]) => {
        this.orders=response;
       
      });
        }

  
  constructor(private list:OrdersService,private router: Router) { }

  
  logIna(){
    //console.log(this.email)
    if(this.username=="admin" && this.password=="admin@123"){
      this.router.navigate(["../home"])
    }
   
    else {
      console.log("in user");
      var l=this.orders.length;
      for(let j=0;j<l;j++)
      {
        if(this.username==this.orders[j].orderRequester )
        {
          this.router.navigate(['../user/'+this.username])
          
          break;
        }
        
      }
   
    }
  

      //alert("Please Enter Valid Details");
    }
  }

        //&& this.username==this.orders[j].orderRequester
  // logIn(){
  //   var l=this.orders.length;
  //   for(let j=0;j<l;j++)
  //   {
  //     if(this.username==this.orders[j].orderRequester )
  //     {
  //       this.router.navigate(['../user/'+this.username])
        
  //       break;
  //     }
      
  //   }
 
  // }





  
