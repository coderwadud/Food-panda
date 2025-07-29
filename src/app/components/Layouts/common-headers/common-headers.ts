import { Component, computed, effect, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProductCart } from '../../../model/data.type';
import { CurrencyPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-common-headers',
  imports: [RouterLink, RouterLinkActive, CurrencyPipe],
  templateUrl: './common-headers.html',
  styleUrl: './common-headers.css',
})
export class CommonHeaders {
  productCartList : Array<ProductCart>= []
  
  totalAmount = computed(()=> 
    this.productCartList.reduce((total, item) => total + item.price, 0)
  )
  constructor(){
    this.productCartList = JSON.parse(localStorage.getItem('product-cart-list') || '[]');
  }
}
