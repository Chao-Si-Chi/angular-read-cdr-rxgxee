import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NgModule } from '@angular/core';
import { NewProductComponent } from './new-product/new-product.component';

const appRoutes: Routes = [
  //載入頁面有順序姓
  { path:'', component: HomeComponent }, // [url]/home
  { path:'home', component: HomeComponent }, // [url]/home
  { path:'products', children: [
      { path:'', component: ProductsComponent, pathMatch: 'full' },
      { path:':id', component: ProductDetailComponent },  // [url]/products/1
      { path:':id/edit', component: NewProductComponent }, 
    ] 
  }, // [url]/products
  //{ path:'', redirectTo: '/home', pathMatch: 'full' }, // [url]/home
  { path:'404', component: PageNotFoundComponent }, 
  { path: '**', redirectTo: '404', pathMatch: 'full' } // no any route matched 
]; 

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ] 
})

export class AppRoutingModule{

}