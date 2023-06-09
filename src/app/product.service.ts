
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
    this.loggingService.logNewProduct(newProduct);
    
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

  updateProduct({id, title, productType, price}) {
    let filterProducts = this.products.filter(x=>x.id === parseInt(id));
    if(filterProducts.length > 0) {
      filterProducts[0].title = title;
      filterProducts[0].productType = productType;
      filterProducts[0].price = price;
    }
  }

  getProduct(id){
    const filterProducts = this.products.filter(x=>x.id === parseInt(id));
    return filterProducts.length === 0 ? undefined : filterProducts[0]
  }
}