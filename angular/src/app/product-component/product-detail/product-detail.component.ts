import { Component, OnInit ,Input} from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router";
import { ProductService} from '../product.service'
import {Product } from '../product.model'


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  id : String
  constructor(private route: ActivatedRoute,private productService : ProductService,
    private router:Router) {
    this.route.queryParams.subscribe(params => {
        this.id = params["id"];  
    });
}


productDetail : Product
  ngOnInit():void{
    this.productService.getProductDetail(this.id).subscribe((data:Product) => {
      this.productDetail = data;
      
    });
  }
  
  
}
