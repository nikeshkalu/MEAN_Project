import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router";
import { NgForm, FormGroup,FormBuilder,FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  form: FormGroup
  
  id : String
  constructor(private route: ActivatedRoute,
    private router:Router) { 
      this.route.queryParams.subscribe(params => {
        this.id = params["id"];  
        console.log(this.id)
    });
    }

  ngOnInit(): void {
    this.form = new FormGroup({
      name : new FormControl(null,{
          validators: [Validators.required]
      }),
      price : new FormControl(null,{
          validators : [Validators.required]
      }),
      productImage : new FormControl(null,{
        validators : [Validators.required]
    })
      
      
  })
  }

  userName = 'xyz'
  onSavePost(){
    console.log('saved')

  //   if(this.form.invalid){
  //     return
  // }
  // this.productService.createProduct(this.form.value)
}

}
