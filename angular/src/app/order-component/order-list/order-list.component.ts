import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import {OrderService} from '../order.service'
import {Order }from '../order.model'


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  // constructor(private router:Router) { }
    constructor(private orderService : OrderService,
      private router:Router) { }
    
  orderLists : Order
  orderList :{}

  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe((data:Order) => {
      this.orderLists = data;
      this.orderList = this.orderLists.orders
      // console.log(this.orderLists)
      // console.log(this.orderLists.orders[0].name)
    });
  }

  delete(id)
  {
    this.orderService.deleteOrder(id)
  }

}
