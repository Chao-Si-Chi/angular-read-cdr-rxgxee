import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.ts';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  Products: Product[] = [
    {
        'id': 11,
        'title': 'OPPO F5 Youth (Gold, 32 GB)',
        'modelName': 'F5 Youth',
        'color': 'Gold',
        'productType': 'Mobile',
        'brand': 'OPPO',
        'price': 16990
    },
    {
        'id': 12,
        'title': 'Dell Inspiron 7000',
        'modelName': 'Inspiron',
        'color': 'Gray',
        'productType': 'Laptop',
        'brand': 'DELL',
        'price': 59990
    }
  ];

  name = "Angular";
  //allowNewProduct = false;
  private _allowNewProduct = false;
  get allowNewProduct(){
    return this._allowNewProduct;
  }
  set allowNewProduct(value){
    this._allowNewProduct = value;
  }
  //New Product Item
  newProduct = { title: "", productType: "", price: 0 };
  product: Product[];

  constructor() { 

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

  ngOnInit() {
  }

}