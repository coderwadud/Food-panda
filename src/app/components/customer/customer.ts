import { Component, inject, signal } from '@angular/core';
import { ProductCart, ProductForm } from '../../model/data.type';
import { generateStringId } from '../../core/id.generator';
import { CartService } from './service/cart.service';

@Component({
  selector: 'app-customer',
  imports: [],
  templateUrl: './customer.html',
  styleUrl: './customer.css'
})
export class Customer {
  productList : Array<ProductForm>= []
  cartService = inject(CartService)
  constructor(){
    this.productList = JSON.parse(localStorage.getItem('product-list') || '[]');
  }
   ngOnInit() {
      this.productList = this.productList.filter(
        (product: ProductForm) => product.status === true
      );
    }
    addToCart(id: string | null) {
      if (!id) return;
      const cartProduct = this.productList.find(item => item.id === id);
      if (!cartProduct) return;
      const productValue: ProductCart = {
        id: generateStringId(this.cartService.productCartList()),
        productId: cartProduct.id ?? "",
        productName: cartProduct.productName ?? "",
        productCategoryId: cartProduct.productCategoryId ?? "",
        images: cartProduct.images ?? "",
        price: cartProduct.price ?? 0,
        discountPercentage: cartProduct.discountPercentage ?? 0
      };

      this.cartService.addToCart(productValue);
    }

}
