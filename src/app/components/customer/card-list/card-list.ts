import { Component, inject } from '@angular/core';
import { CartService } from '../service/cart.service';
import { CurrencyPipe, PercentPipe } from '@angular/common';

@Component({
  selector: 'app-card-list',
  imports: [CurrencyPipe, PercentPipe],
  templateUrl: './card-list.html',
  styleUrl: './card-list.css'
})
export class CardList {
  cartService = inject(CartService)
  cartProductData = this.cartService.productCartList;
  totalAmount = this.cartService.totalAmount;
  totalDiscount = this.cartService.totalDiscount;
  total = this.cartService.finalAmount;
}
