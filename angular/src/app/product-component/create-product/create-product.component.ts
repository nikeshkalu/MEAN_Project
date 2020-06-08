import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service'
import { NgForm, FormGroup,FormBuilder,FormControl, Validators } from '@angular/forms';
import { Product} from '../product.model'
import { Router,NavigationExtras} from '@angular/router'

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  form: FormGroup
  product:Product
  productList : Product

  constructor(public productService: ProductService,private router:Router) { }

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

  this.productService.getMyProducts().subscribe((data:Product) => {
    this.productList = data;
  });

  }

imagePreview: string

  productImage: File ;
  handleFileInput(files: FileList) {
    this.productImage = files.item(0);
    this.form.patchValue({
      productImage : this.productImage
  })
 
  const reader = new FileReader()
  reader.onload = () =>{
      this.imagePreview = reader.result as string
  }
  reader.readAsDataURL(this.productImage)
  console.log(this.form.value)

}


  onSavePost(){
    console.log('saved')

    if(this.form.invalid){
      return
  }
  this.productService.createProduct(this.form.value)
}
delete(temp) {
  let navigationExtras: NavigationExtras = {
    queryParams: {
        "id": temp
    }
};
this.router.navigate(["../products/delete"], navigationExtras);
}

}
