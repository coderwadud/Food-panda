import { Component } from '@angular/core';
import { ProductCategoryForm, SellerCategoryForm } from '../../../../model/data.type';

@Component({
  selector: 'app-seller-category-list',
  imports: [],
  templateUrl: './seller-category-list.html',
  styleUrl: './seller-category-list.css'
})
export class SellerCategoryList {
  sellerCtgList : Array<SellerCategoryForm>= []
  constructor(){
    this.sellerCtgList = JSON.parse(localStorage.getItem('seller-categories') || '[]');
  }
  productCategoryList = JSON.parse(localStorage.getItem('product-categories') || '[]');
  getProductCategoryName(id: string) {
    const category = this.productCategoryList.find((item : ProductCategoryForm) => item.id === id);
    return category ?  category.product_category_name : "Data Not Found";
  }
}
