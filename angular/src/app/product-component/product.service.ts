import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable()
export class ProductService {


  constructor(private http: HttpClient,private router:Router) {
  }
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:'Bearer '+ localStorage.getItem('token')
    })
  }
  getAllProducts() {
    const productList = this.http.get('http://localhost:3000/products', this.httpOptions);
    return productList;
  }

  getProductDetail(_id){
    const productDetail = this.http.get('http://localhost:3000/products/'+_id, this.httpOptions);
    return productDetail
  }

  getMyProducts(){
    const productList = this.http.get('http://localhost:3000/products/myProducts', this.httpOptions);
    return productList;
  }

  createProduct(formData){
    // formData['productImage'] = productImage
    // const formDatas = new FormData();
    // formDatas.append('productImage',formData.productImage,formData.name);
    // formDatas.append('name',formData.name)
    // formDatas.append('price',formData.price)
    
  
    console.log(formData)
  
   console.log(localStorage.getItem('token'))
    
    this.http.post<{message:string}>('http://localhost:3000/products',formData,this.httpOptions)
        .subscribe((responseData)=>{
            console.log('New Product Created')
            this.router.navigate(["products/list"])
     
        })
  }

  deleteProduct(_id){
    this.http.delete('http://localhost:3000/products/'+_id, this.httpOptions).subscribe((message:String) => {
      console.log(message)
    this.router.navigate(["products/create"])
      
    });
  }


}
