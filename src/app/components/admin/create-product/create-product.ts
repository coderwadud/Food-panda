import { Component, inject } from '@angular/core';
import { ProductForm } from '../../../model/data.type';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { idGenerator } from '../../../core/id.generator';

@Component({
  selector: 'app-create-product',
  imports: [ReactiveFormsModule],
  templateUrl: './create-product.html',
  styleUrl: './create-product.css'
})
export class CreateProduct {
productList : Array<ProductForm>= []
  sellerList = JSON.parse(localStorage.getItem('seller-profile') || '[]');
  categoryList = JSON.parse(localStorage.getItem('product-categories') || '[]');
  private fb = inject(FormBuilder)
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
  productForm(){
    if(this.form.valid){
      const formValue = this.form.getRawValue()
      formValue.id=idGenerator()
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
