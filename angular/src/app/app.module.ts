import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { UserLoginComponent } from './user-component/user-login/user-login.component';
import { UserSignupComponent } from './user-component/user-signup/user-signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { UsersServices } from './user-component/user.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { OrderComponentComponent } from './order-component/order-component.component';
import { ProductListComponent } from './product-component/product-list/product-list.component';
import { CreateProductComponent } from './product-component/create-product/create-product.component';
import { UpdateProductComponent } from './product-component/update-product/update-product.component';
import { DeleteProductComponent } from './product-component/delete-product/delete-product.component';
import { ProductDetailComponent } from './product-component/product-detail/product-detail.component';
import { ProductService } from './product-component/product.service';
import { CreateOrderComponent } from './order-component/create-order/create-order.component';
import { OrderListComponent } from './order-component/order-list/order-list.component';
// import { DeleteOrderComponent } from './order-component/delete-order/delete-order.component';
import { OrderService } from './order-component/order.service';
// import { MatFileUploadModule } from '@angular/material/'

@NgModule({
  declarations: [
    AppComponent,
    UserComponentComponent,
    UserLoginComponent,
    UserSignupComponent,
    NavBarComponent,
    MainPageComponent,
    ProductComponentComponent,
    OrderComponentComponent,
    ProductListComponent,
    CreateProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    ProductDetailComponent,
    CreateOrderComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule
  ],
  providers: [UsersServices,ProductService,OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
