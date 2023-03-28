import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { PaddingZeroPipe } from './padding-zero.pipe';
import { NewProductComponent } from './new-product/new-product.component';
import { UserService } from './user.service';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//import { LoggingService } from './logging.service';
//import { ProductService } from './product.service';

import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AppRoutingModule } from './app-routing.module';

/*const appRoutes: Routes = [
  //載入頁面有順序姓
  { path:'', component: HomeComponent }, // [url]/home
  { path:'home', component: HomeComponent }, // [url]/home
  { path:'products', component: ProductsComponent }, // [url]/products
  { path:'products/:id', component: ProductDetailComponent },  // [url]/products/1
  //{ path:'', redirectTo: '/home', pathMatch: 'full' }, // [url]/home
  { path:'page-not-found', component: PageNotFoundComponent }, 
  { path: '**', redirectTo: 'page-not-found', pathMatch: 'full' } // no any route matched 
]; */

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    AppRoutingModule
  ],
  declarations: [ AppComponent, HelloComponent, ProductsComponent, ProductComponent, NewProductComponent, PaddingZeroPipe, HomeComponent, HeaderComponent, PageNotFoundComponent, ProductDetailComponent ],
  bootstrap:    [ AppComponent ], 
  providers: [UserService]
})
export class AppModule { }
