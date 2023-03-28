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
//import { LoggingService } from './logging.service';
//import { ProductService } from './product.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ProductsComponent, ProductComponent, NewProductComponent, PaddingZeroPipe ],
  bootstrap:    [ AppComponent ], 
  providers: [UserService]
})
export class AppModule { }
