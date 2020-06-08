import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable()
export class OrderService {


  constructor(private http: HttpClient,private router:Router) {
  }
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:'Bearer '+ localStorage.getItem('token')
    })
  }

  getAllOrders() {
    const orderList = this.http.get('http://localhost:3000/orders/', this.httpOptions);
    return orderList;
  }

  createOrder(formData){
    console.log(formData)
    this.http.post<{message:string}>('http://localhost:3000/orders/',formData,this.httpOptions)
        .subscribe((responseData)=>{
            console.log('New Product Created')
            this.router.navigate(["orders/lists"])
     
        })
  }

  deleteOrder(_id){
    this.http.delete('http://localhost:3000/orders/'+_id, this.httpOptions).subscribe((message:String) => {
      console.log(message)
      location.reload()
    this.router.navigate(["orders/lists"])
      
    });
  }

  


}
