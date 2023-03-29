import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, NavigationExtras, } from '@angular/router';
//import { LoggingService } from '../logging.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'], 
  //providers: [LoggingService]
})
export class ProductComponent implements OnInit {

  @Input('product') productData: Product;
  //@Output() removed: EventEmitter<number> = new EventEmitter<number>();
  constructor(private productService: ProductService, 
              private router: Router) { }

  ngOnInit() {
    console.log(this.productData);
  }

  delete(){
    //console.log('on product component delete: ', this.productData.id);
    //this.removed.emit(this.productData.id);
    //this.loggingService.logDeleteProduct(this.productData.id, this.productData.title);
    // Use service
    this.productService.removeProduct(this.productData.id);
  }

  showDetail(){
    let navigationExtra: NavigationExtras = {
      queryParamsHandling: 'merge', 
      queryParams: {secondId: 200}
    }
    this.router.navigate(['/products', this.productData.id], navigationExtra);
  }

  onEdit(){
    this.router.navigate(['products', this.productData.id, 'edit']);
  }

}