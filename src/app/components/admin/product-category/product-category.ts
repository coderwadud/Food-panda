import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductCategoryForm } from '../../../model/data.type';
import { generateStringId } from '../../../core/id.generator';
@Component({
  selector: 'app-product-category',
  imports: [ReactiveFormsModule],
templateUrl: './product-category.html',
  styleUrl: './product-category.css'
})
export class ProductCategory {
  productCategoryList : Array<ProductCategoryForm>= []
  private fb = inject(FormBuilder)
  form = this.fb.group({
    id: this.fb.control<string | null>(null),
    product_category_name: this.fb.control<string | null>(null, Validators.required),
    description: this.fb.control<string | null> (null),
    product_ctg_status: this.fb.control<boolean | null> (false),
    category_forane_key: this.fb.control<string | null> (null),
  })
  forane_key = JSON.parse(localStorage.getItem('product-categories') || '[]');
  productCategorySubmit(){
    if(this.form.valid){
      const formValue = this.form.getRawValue()
      formValue.id=generateStringId(this.forane_key)
      formValue.product_ctg_status=false
      this.productCategoryList = JSON.parse(localStorage.getItem('product-categories') || '[]');
      this.productCategoryList.push(formValue);
      localStorage.setItem('product-categories', JSON.stringify(this.productCategoryList));
      this.form.reset();
      alert('Category saved SuccessFully');
      this.forane_key = JSON.parse(localStorage.getItem('product-categories') || '[]');
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}

