import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import {OrderService} from '../order.service' 
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  form : FormGroup
  id : String
  constructor(private route: ActivatedRoute,private orderService : OrderService,
    private router:Router) {
    this.route.queryParams.subscribe(params => {
        this.id = params["id"];  
    });
}

  ngOnInit(): void {
    this.form = new FormGroup({
      quantity : new FormControl(null,{
          validators: [Validators.required]
      }),
      productId : new FormControl(null,{
        validators: [Validators.required]
    }),
      
      
  })
  }

  onSavePost(){
    console.log('saved')
    // console.log(this.id)
    this.form.patchValue({
      productId : this.id
  })
  // console.log(this.form.value)
  //   if(this.form.invalid){
  //     return
  // }
  this.orderService.createOrder(this.form.value)
}

}
