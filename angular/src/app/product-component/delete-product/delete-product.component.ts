import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router";
import { ProductService} from '../product.service'
import {Product } from '../product.model'

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  id : String
  constructor(private route: ActivatedRoute,private productService : ProductService,
    private router:Router) { 
      this.route.queryParams.subscribe(params => {
        this.id = params["id"];  
        console.log(this.id)
    });
    }

  ngOnInit(): void {
    this.productService.deleteProduct(this.id)
    
  }
    


}
