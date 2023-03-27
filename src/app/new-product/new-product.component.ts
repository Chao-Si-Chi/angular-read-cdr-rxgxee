import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css'], 
  providers: [LoggingService]
})
export class NewProductComponent implements OnInit {

  showNewProductPanel = true;
  //New Product Item
  newProduct = { title: "", productType: "", price: 0 };
  @Output() addProduct:EventEmitter<any> = new EventEmitter<any>();
  constructor(private loggingService: LoggingService) { }

  ngOnInit() {
  }

  onNewProductClick(){
    //console.log('on new product: ', this.newProduct);
    //const loggingService = new LoggingService();
    //loggingService.logNewProduct(this.newProduct.title, this.newProduct.productType, this.newProduct.price);
    this.loggingService.logNewProduct(this.newProduct.title, this.newProduct.productType, this.newProduct.price);
    
    this.addProduct.emit(this.newProduct);
    this.newProduct = { title: "", productType: "", price: 0 };
  }

}