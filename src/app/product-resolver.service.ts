import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { ProductService } from "./product.service";

@Injectable()
export class ProductResolver implements Resolve<Product> {
  constructor(private productService: ProductService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> | Promise<Product> | Product{
    return this.productService.getProduct(route.params['id']);
  }
}