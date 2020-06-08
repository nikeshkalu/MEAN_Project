import { NgModule } from "@angular/core";
import { RouterModule , Routes } from '@angular/router'
import { UserLoginComponent} from './user-component/user-login/user-login.component'
import {UserSignupComponent} from './user-component/user-signup/user-signup.component'
import {NavBarComponent} from './nav-bar/nav-bar.component'
import { MainPageComponent } from './main-page/main-page.component';
import {OrderComponentComponent} from './order-component/order-component.component'
import {ProductComponentComponent } from './product-component/product-component.component'
import {CreateProductComponent} from './product-component/create-product/create-product.component'
import {DeleteProductComponent} from './product-component/delete-product/delete-product.component'
import {ProductDetailComponent} from './product-component/product-detail/product-detail.component'
import {ProductListComponent} from './product-component/product-list/product-list.component'
import {UpdateProductComponent} from './product-component/update-product/update-product.component'
import { CreateOrderComponent } from './order-component/create-order/create-order.component';
import { OrderListComponent } from './order-component/order-list/order-list.component';
// import {  DeleteOrderComponent } from './order-component/delete-order/delete-order.component'
// import { DeleteOrderComponent } from './order-component/delete-order/delete-order.component';

const routes : Routes = [
    { path:'user/login', component : UserLoginComponent},
    { path:'user/signup', component : UserSignupComponent},
    {path:'nav',component:NavBarComponent},
    {path:'products',component:ProductComponentComponent},
    {path:'orders',component:OrderComponentComponent},
    {path:'orders/create',component:CreateOrderComponent},
    {path:'orders/lists',component:OrderListComponent},
    // {path:'orders/delete',component:DeleteOrderComponent},
    {path:'home',component:MainPageComponent},
    {path:'products/create',component:CreateProductComponent},
    {path:'products/delete',component:DeleteProductComponent},
    {path:'products/detail',component:ProductDetailComponent},
    {path:'products/list',component:ProductListComponent},
    {path:'products/update',component:UpdateProductComponent},
    {path:'', redirectTo:'user/login',pathMatch:'full'}

]
@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})

export class AppRoutingModule{

}
