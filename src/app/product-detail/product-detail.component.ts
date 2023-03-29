import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { Location } from '@angular/common';
import { takeUntil } from 'rxjs/operators';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  queryId = '';
  product: any;
  paramSubscription: Subscription;
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private route: ActivatedRoute, 
              private productService: ProductService, 
              private location: Location) { }

  ngOnInit() {
    //this.queryId = this.route.snapshot.params['id'];
    /*this.paramSubscription = this.route.params.pipe(
      takeUntil(this.destroy$)
    )
    .subscribe({
      next: param => {
        this.queryId = param['id'];
        this.loadProduct();
      }
    });
    this.loadProduct();*/
    this.route.data.subscribe({
      next: (data: Data)=>{
        this.product = data['product'];
      }
    });
  }

  goBack(){
    this.location.back();
  }

  /*loadProduct(){
    this.product = this.productService.getProduct(this.queryId);
  }*/

  ngOnDestroy(){
    //this.paramSubscription.unsubscribe();
    this.destroy$.next(true);
  }

}