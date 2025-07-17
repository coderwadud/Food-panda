import { Component } from '@angular/core';
import { ProductForm } from '../../../../model/data.type';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  productList : Array<ProductForm>= []
  constructor(){
    this.productList = JSON.parse(localStorage.getItem('product-list') || '[]');
  }
}
