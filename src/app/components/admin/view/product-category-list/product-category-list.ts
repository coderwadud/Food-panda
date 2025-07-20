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
  statusApprove(id: string){
    const status =  this.productCategoryList.find((item)=> item.id === id);
    if(status){
      status.product_ctg_status = true;
      localStorage.setItem('product-categories', JSON.stringify(this.productCategoryList));
    }
  }
  statusPendng(id: string){
    const status =  this.productCategoryList.find((item)=> item.id === id);
    if(status){
      status.product_ctg_status = false;
      localStorage.setItem('product-categories', JSON.stringify(this.productCategoryList));
    }
  }
}
