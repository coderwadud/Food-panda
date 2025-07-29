import { Component, computed, effect, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProductCart } from '../../../model/data.type';
import { CurrencyPipe, JsonPipe } from '@angular/common';
import { CartService } from '../../customer/service/cart.service';

@Component({
  selector: 'app-common-headers',
  imports: [RouterLink, RouterLinkActive, CurrencyPipe],
  templateUrl: './common-headers.html',
  styleUrl: './common-headers.css',
})
export class CommonHeaders {
  cartService = inject(CartService)
  totalAmount = this.cartService.totalAmount;
}
