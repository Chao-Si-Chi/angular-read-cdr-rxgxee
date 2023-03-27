export class LoggingService {
  logNewProduct(title:string, productType:string, price:number) {
    console.log(`new product added: title: ${title}, product type: ${productType}, price: ${price}`);
  }
  logDeleteProduct(id:number, title?:string) {
    console.log(`product deleted: id: ${id}, title: ${title}`);
  }
}