import { Component } from '@angular/core';
import { SellerCategoryForm } from '../../../../model/data.type';

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
  approveStatus(id: string){
    const status = this.sellerCtgList.find((item=> item.id === id));
    if(status){
      status.seller_ctg_status = true;
      localStorage.setItem('seller-categories', JSON.stringify(this.sellerCtgList))
    }
  }
  pendingStatus(id: string){
    const status = this.sellerCtgList.find((item=> item.id=id));
    if(status){
      status.seller_ctg_status = false;
      localStorage.setItem('seller-categories', JSON.stringify(this.sellerCtgList))
    }
  }
}
