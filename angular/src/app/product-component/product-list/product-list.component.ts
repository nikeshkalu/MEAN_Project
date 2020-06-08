import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {ProductService} from '../product.service';
import {Router,NavigationExtras} from '@angular/router'
import {Product } from '../product.model'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 

  constructor(private productService : ProductService,
    private router:Router) { }
    
  productList : Product
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data:Product) => {
            this.productList = data;
          });
          
           
  }
  
  showName(temp) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "id": temp
      }
  };
  this.router.navigate(["../products/detail"], navigationExtras);
  }

  sendProductId(temp){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "id": temp
      }
  };
  this.router.navigate(["../../orders/create"], navigationExtras);
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

// import { Component, OnInit } from '@angular/core';
// import {StudentService} from '../student.service';
// import {Router, Routes} from '@angular/router';

// @Component({
//   selector: 'app-list',
//   templateUrl: './list.component.html',
//   styleUrls: ['./list.component.css']
// })
// export class ListComponent implements OnInit {

//   constructor(private studentService: StudentService,
//               private router: Router
//               ) { }
//   studentList: any[];
//   ngOnInit() {
//     this.studentService.getAllStudents().subscribe((data: any) => {
//       this.studentList = data;
//     });
//   }
//   gotoDetail(event, id) {
//     console.log('id====', id);
//     // @ts-ignore
//     this.router.navigate([`/students/${id}/details`]);
//   }
// }
