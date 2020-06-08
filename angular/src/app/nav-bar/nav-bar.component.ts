import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  name="Anonymous"
  
  myProduct(){
  this.router.navigate(["products/create"])   
  }
  logOut()
  {
    localStorage.removeItem('token')
    this.router.navigate(["user/login"])
  }
  myOrders()
  {
    this.router.navigate(["orders/lists"])
  }

}
