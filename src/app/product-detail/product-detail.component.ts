import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  queryId = '';
  product: any;
  constructor(private route: ActivatedRoute, 
              private productService: ProductService) { }

  ngOnInit() {
    this.queryId = this.route.snapshot.params['id'];
    this.loadProduct();
  }

  loadProduct(){
    this.product = this.productService.getProduct(this.queryId);
  }

}