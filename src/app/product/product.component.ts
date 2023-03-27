import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input('product') productData: Product;
  @Output() removed: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
    console.log(this.productData);
  }

  delete(){
    console.log('on product component delete: ', this.productData.id);
    this.removed.emit(this.productData.id);
  }

}