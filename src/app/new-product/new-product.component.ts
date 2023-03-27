import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  showNewProductPanel = true;
  //New Product Item
  newProduct = { title: "", productType: "", price: 0 };
  @Output() addProduct:EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  onNewProductClick(){
    console.log('on new product: ', this.newProduct);
    this.addProduct.emit(this.newProduct);
    this.newProduct = { title: "", productType: "", price: 0 };
  }

}