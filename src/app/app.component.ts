import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { HelloComponent } from './hello.component';
import { Service } from './service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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

  constructor() { 
    this.products = [
      {
        id: 11,
        title: "OPPO F5 Youth (Gold, 32 GB)",
        modelName: "F5 Youth",
        color: "Gold",
        productType: "Mobile",
        brand: "OPPO",
        price: 16990
      },
      {
        id: 12,
        title: "Dell Inspiron 7000",
        modelName: "Inspiron",
        color: "Gray",
        productType: "Laptop",
        brand: "DELL",
        price: 59990
      }
    ];

    setTimeout(()=>{
      this.allowNewProduct = true;
    }, 2000)
  }

  onNewProductClick(){
    //alert("new botton click!!");
    this.showNewProductPanel = !this.showNewProductPanel;
  }

  getColor(product) {
    console.log(product);
    return product.productType === 'Mobile' ? 'red' : 'black'
  }

  onDelete(id){
    console.log('in app component: ',id);
    this.products.splice(this.products.findIndex(x=>x.id === id), 1);
  }
}
