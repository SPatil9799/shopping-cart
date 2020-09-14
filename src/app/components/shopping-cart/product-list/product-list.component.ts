import { Component, OnInit } from '@angular/core';

import {ProductService} from 'src/app/services/product.service'
import {Product } from 'src/app/models/product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productsList: Product[] = []
  constructor(private productService:ProductService){}

  ngOnInit() {
    this.productsList=this.productService.getProducts()
  }

}