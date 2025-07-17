import { Component } from '@angular/core';
import { ProductCategoryForm } from '../../../../model/data.type';

@Component({
  selector: 'app-product-category-list',
  imports: [],
  templateUrl: './product-category-list.html',
  styleUrl: './product-category-list.css'
})
export class ProductCategoryList {
  productCategoryList : Array<ProductCategoryForm>= []
  constructor(){
    this.productCategoryList = JSON.parse(localStorage.getItem('product-categories') || '[]');
  }
}
