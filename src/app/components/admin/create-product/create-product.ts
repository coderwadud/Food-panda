import { Component, inject } from '@angular/core';
import { ProductCategoryForm, ProductForm, SellerProfileForm } from '../../../model/data.type';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { generateStringId } from '../../../core/id.generator';

@Component({
  selector: 'app-create-product',
  imports: [ReactiveFormsModule],
  templateUrl: './create-product.html',
  styleUrl: './create-product.css'
})
export class CreateProduct {
productList : Array<ProductForm>= []
  sellerProfileList : Array<SellerProfileForm>= []
  sellerList = JSON.parse(localStorage.getItem('seller-profile') || '[]');
  categoryList = JSON.parse(localStorage.getItem('product-categories') || '[]');
  private fb = inject(FormBuilder)
 ngOnInit() {
    this.categoryList = this.categoryList.filter(
      (category: ProductCategoryForm) => category.product_ctg_status === true
    );
    this.sellerList = this.sellerList.filter(
      (seller: SellerProfileForm) => seller.sellerStatus === true
    );
  }
  form = this.fb.group({
      id: this.fb.control<string | null>(null),
      productName: this.fb.control<string | null>(null, Validators.required),
      productCategoryId: this.fb.control<string | null>(null, Validators.required),
      images: this.fb.control<string | null>(null),
      sellerId: this.fb.control<string | null>(null, Validators.required),
      price: this.fb.control<number | null>(null, Validators.required),
      discountPercentage: this.fb.control<number | null>(null),
      description: this.fb.control<string | null>(null),
      status: this.fb.control<boolean | null>(true),
  })
  
    productListPrevDAta = JSON.parse(localStorage.getItem('product-list') || '[]');
  productForm(){
    if(this.form.valid){
      const formValue = this.form.getRawValue()
      formValue.id=generateStringId(this.productListPrevDAta)
      formValue.status=true
      this.productList = JSON.parse(localStorage.getItem('product-list') || '[]');
      this.productList.push(formValue);
      localStorage.setItem('product-list', JSON.stringify(this.productList));
      this.form.reset();
      alert('Category saved SuccessFully');
    } else {
      alert('Please fill out the form correctly.');
    }
  }


}
