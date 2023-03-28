import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { HelloComponent } from './hello.component';
import { ProductService } from './product.service';
import { Service } from './service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  //providers: [ProductService]
})
export class AppComponent {
  name = "Angular";
  //allowNewProduct = false;
  private _allowNewProduct = false;
  get allowNewProduct(){
    return this._allowNewProduct;
  }
  set allowNewProduct(value){
    this._allowNewProduct = value;
  }
  
  products: Product[];

  constructor(private productService:ProductService) { 
    this.products = this.productService.products;

    setTimeout(()=>{
      this.allowNewProduct = true;
    }, 2000)
  }

  /*onNewProductClick(){
    //alert("new botton click!!");
    this.showNewProductPanel = !this.showNewProductPanel;
  }*/

  getColor(product) {
    console.log(product);
    return product.productType === 'Mobile' ? 'red' : 'black'
  }

  /*onDelete(id){
    console.log('in app component: ',id);
    this.products.splice(this.products.findIndex(x=>x.id === id), 1);
  }

  onAdd($event){
    //console.log('in app component new product: ', $event);
    //this.products.push($event);
    this.productService.addProduct($event);
  }*/
}
