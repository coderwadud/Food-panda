import { Component } from '@angular/core';
import { ProductCategoryForm, ProductForm, SellerCategoryForm, SellerProfileForm } from '../../../../model/data.type';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  productList : Array<ProductForm>= []
  sellerList : Array<SellerProfileForm>= []
  productCategoryList : Array<ProductCategoryForm>= []
  constructor(){
    this.productList = JSON.parse(localStorage.getItem('product-list') || '[]');
    this.sellerList = JSON.parse(localStorage.getItem('seller-profile') || '[]');
  this.productCategoryList = JSON.parse(localStorage.getItem('product-categories') || '[]');
  }
  sellerNameFind(id: string){
    const seller = this.sellerList.find((item=>item.id=== id))
    return seller?.sellerName
  }
  categoryNameFind(id: string){
    const category = this.productCategoryList.find((item=>item.id=== id))
    return category?.product_category_name
  }
  approveStatus(id: string){
    const product = this.productList.find((item=>item.id===id));
    if(product){
      product.status=true
      localStorage.setItem('product-list', JSON.stringify(this.productList))
    }
  }
  pendingStatus(id: string){
    const product = this.productList.find((item=>item.id===id));
    if(product){
      product.status=false
      localStorage.setItem('product-list', JSON.stringify(this.productList))
    }
  }
}
