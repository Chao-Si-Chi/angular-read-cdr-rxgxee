import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  showNewProductPanel = true;
  //New Product Item
  newProduct = { title: "", productType: "", price: 0 };
  constructor() { }

  ngOnInit() {
  }

}