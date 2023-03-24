import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { Product } from '../models/product.ts';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input('productData') products: any;
  @Output() deletedItem: EventEmitter<any> = new EventEmitter();
  constructor(){

  }
  
  ngOnInit() {
  }

  onDelete(product) {
    console.log(product);
    this.deletedItem.emit(product.id);
  }

}