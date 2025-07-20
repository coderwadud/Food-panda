import { Component } from '@angular/core';
import { ProductForm } from '../../model/data.type';

@Component({
  selector: 'app-customer',
  imports: [],
  templateUrl: './customer.html',
  styleUrl: './customer.css'
})
export class Customer {
  productList : Array<ProductForm>= []
  constructor(){
    this.productList = JSON.parse(localStorage.getItem('product-list') || '[]');
  }
   ngOnInit() {
      this.productList = this.productList.filter(
        (product: ProductForm) => product.status === true
      );
    }
}
