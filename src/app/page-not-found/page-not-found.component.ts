import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  id = '';
  title = '';
  fragment = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //this.id = this.route.snapshot.queryParams['id'];
    //this.title = this.route.snapshot.queryParams['title'];
    //this.fragment = this.route.snapshot.fragment;

    this.route.queryParams.subscribe({
      next: (param: Params) => {
        this.id = param['id'];
        this.title = param['title'];
      }
    })

    this.route.fragment.subscribe({
      next: (fragment) => {
        this.fragment = fragment;
      }
    })
  }

}