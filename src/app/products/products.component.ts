import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ProductService } from '../product.service';
//import { Product } from '../models/product.ts';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  //@Input('productData') products: any;
  products: any;
  //@Output() deletedItem: EventEmitter<any> = new EventEmitter();
  constructor(private productService: ProductService, 
              private router: Router, 
              private route: ActivatedRoute){

  }
  
  ngOnInit() {
    this.products = this.productService.products;
  }

  /*onDelete(product) {
    console.log(product);
    this.deletedItem.emit(product.id);
  }*/

  deleteItem(id) {
    console.log('products component delete: ', id);
    //this.deletedItem.emit(id);
  }

  onReload(){
    
    this.router.navigate(['products'], { relativeTo: this.route });
  }

  onNewProduct(){
    this.router.navigate(['products', 'new', 'edit']);
  }
}