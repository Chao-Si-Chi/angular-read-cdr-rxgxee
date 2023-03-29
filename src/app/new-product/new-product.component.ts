import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
//import { LoggingService } from '../logging.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css'], 
  //providers: [LoggingService]
})
export class NewProductComponent implements OnInit {

  showNewProductPanel = true;
  //New Product Item
  newProduct = { title: "", productType: "", price: 0, id: '' };
  buttonTitle = 'Add';
  //@Output() addProduct:EventEmitter<any> = new EventEmitter<any>();
  constructor(private productService: ProductService, 
              private route: ActivatedRoute, 
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe({
      next: (params: Params) => {
        if(params['id'] === 'new'){
          //New Product
        }
        else{
          this.buttonTitle = 'Edit';
          this.newProduct = this.destructureProduct(this.productService.getProduct(params['id']));
        }
      }
    })
  }

  onNewProductClick(){
    //console.log('on new product: ', this.newProduct);
    //const loggingService = new LoggingService();
    //loggingService.logNewProduct(this.newProduct.title, this.newProduct.productType, this.newProduct.price);
    //this.loggingService.logNewProduct(this.newProduct.title, this.newProduct.productType, this.newProduct.price);

    //this.addProduct.emit(this.newProduct);
    if(this.buttonTitle === 'Add'){
      this.productService.addProduct(this.newProduct);
    }
    else{
      this.productService.updateProduct(this.newProduct);
    }
    this.productService.addProduct(this.newProduct);
    this.newProduct = { title: "", productType: "", price: 0, id: '' };
    this.router.navigate(['/products'])
  }

  destructureProduct({id, title, productType, price}){
    return {id, title, productType, price};
  }

}