import { Component } from '@angular/core';
import { SellerProfileForm } from '../../../../model/data.type';

@Component({
  selector: 'app-seller-list',
  imports: [],
  templateUrl: './seller-list.html',
  styleUrl: './seller-list.css'
})
export class SellerList {
  sellerList : Array<SellerProfileForm>= []
  constructor(){
    this.sellerList = JSON.parse(localStorage.getItem('seller-profile') || '[]');
  }
  // productCategoryList = JSON.parse(localStorage.getItem('product-categories') || '[]');
  // getProductCategoryName(id: string) {
  //   const category = this.productCategoryList.find((item : ProductCategoryForm) => item.id === id);
  //   return category ?  category.product_category_name : "Data Not Found";
  // }
}
