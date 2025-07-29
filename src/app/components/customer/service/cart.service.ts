import { Injectable, signal, computed, effect } from '@angular/core';
import { ProductCart } from '../../../model/data.type';

@Injectable({ providedIn: 'root' })
export class CartService {
  productCartList = signal<ProductCart[]>([]);
  
  totalAmount = computed(() =>
    this.productCartList().reduce((total, item) => total + item.price, 0)
  );
  totalDiscount = computed(() =>
    this.productCartList().reduce((total, item) =>
      total + (item.price * item.discountPercentage) / 100, 0)
  );
  finalAmount = computed(() =>
    this.productCartList().reduce((total, item) =>
      total + item.price * (1 - item.discountPercentage / 100), 0)
  );



  constructor() {
    // Load from localStorage once on service init
    const saved = localStorage.getItem('product-cart-list');
    if (saved) {
      this.productCartList.set(JSON.parse(saved));
    }
    // Sync changes to localStorage
    effect(() => {
      localStorage.setItem('product-cart-list', JSON.stringify(this.productCartList()));
    });
  }

  addToCart(product: ProductCart) {
    this.productCartList.update(list => [...list, product]);
  }
}
