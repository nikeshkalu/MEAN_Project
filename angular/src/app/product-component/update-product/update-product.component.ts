import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router";
import { NgForm, FormGroup,FormBuilder,FormControl, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import {Product } from '../product.model'


@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  form: FormGroup
  productDetail : Product

  
  id : String
  constructor(private route: ActivatedRoute,private productService:ProductService,
    private router:Router) { 
      this.route.queryParams.subscribe(params => {
        this.id = params["id"];  
        console.log(this.id)
    });
    }

  ngOnInit(): void {
    this.productService.getProductDetail(this.id).subscribe((data:Product) => {
      this.productDetail = data;
      
    });

    this.form = new FormGroup({
      name : new FormControl(null,{
          validators: [Validators.required]
      }),
      price : new FormControl(null,{
          validators : [Validators.required]
      })
    //   ,
    //   productImage : new FormControl(null,{
    //     validators : [Validators.required]
    // })


  
      
  })
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
    console.log('saved')
      return
  }
  this.productService.updateProduct(this.id,this.form.value)
}

}
