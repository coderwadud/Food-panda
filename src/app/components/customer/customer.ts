import { Component, signal } from '@angular/core';
import { ProductCart, ProductForm } from '../../model/data.type';
import { generateStringId } from '../../core/id.generator';

@Component({
  selector: 'app-customer',
  imports: [],
  templateUrl: './customer.html',
  styleUrl: './customer.css'
})
export class Customer {
  productList : Array<ProductForm>= []
  productCartList : Array<ProductCart>= []
  constructor(){
    this.productList = JSON.parse(localStorage.getItem('product-list') || '[]');
    this.productCartList = JSON.parse(localStorage.getItem('product-cart-list') || '[]');
  }
   ngOnInit() {
      this.productList = this.productList.filter(
        (product: ProductForm) => product.status === true
      );
    }
    // prevCartData = JSON.parse(localStorage.getItem('product-cart-list') || '[]');
addToCart(id: string | null) {
  if (!id) return; // Prevent null ID usage

  const cartProduct = this.productList.find(item => item.id === id);

  if (cartProduct) {
    const productValue: ProductCart = {
      id: generateStringId(this.productCartList),
      productId: cartProduct.id ?? "", 
      productName: cartProduct.productName ?? "",
      productCategoryId: cartProduct.productCategoryId ?? "",
      images: cartProduct.images ?? "",
      price: cartProduct.price ?? 0,
      discountPercentage: cartProduct.discountPercentage ?? 0
    };
    this.productCartList = JSON.parse(localStorage.getItem('product-cart-list') || '[]');
    this.productCartList.push(productValue)
    localStorage.setItem('product-cart-list', JSON.stringify(this.productCartList));
  }
}

}
