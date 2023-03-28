
import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({providedIn: 'root'})
export class ProductService {
  products = [
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
  
  constructor(private loggingService: LoggingService) { } // inject service
  addProduct(newProduct){
    this.loggingService.logNewProduct(newProduct.title, newProduct.productType, newProduct.price);
    
    let idArray = this.products.map(x=>x.id);
    //...為解構語法，如陣列用此語法會逐一拿出
    newProduct.id = Math.max(...idArray)+1
    this.products.push(newProduct);
  }

  removeProduct(id){
    this.loggingService.logDeleteProduct(id);
    //console.log(`in service remove product: ${id}`)
    this.products.splice(this.products.findIndex(x => x.id === id), 1);
  }
}