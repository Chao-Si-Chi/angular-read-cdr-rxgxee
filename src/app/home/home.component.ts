import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLoadProducts(){
    let navigationExtras: NavigationExtras = {
      queryParams: { firstId: 10 }, 
      fragment: 'Hello'
    }
    this.router.navigate(['/products'], navigationExtras);
    //參數為ARRAY
    //this.router.navigate(['/products']);
    //參數為STRING
    //this.router.navigateByUrl('/products');
  }

}