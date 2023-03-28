import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class LoggingService {
  logNewProduct({ title, productType, price }) {
    console.log(`new product added: title: ${title}, product type: ${productType}, price: ${price}`);
  }
  logDeleteProduct(id:number, title?:string) {
    console.log(`product deleted: id: ${id}, title: ${title}`);
  }
}