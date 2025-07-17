import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { idGenerator } from '../../../core/id.generator';
import { ProductCategoryForm, SellerCategoryForm } from '../../../model/data.type';

@Component({
  selector: 'app-create-category',
  imports: [ReactiveFormsModule],
  templateUrl: './create-category.html',
  styleUrl: './create-category.css'
})
export class CreateCategory {
  sellerCategoryList : Array<SellerCategoryForm>= []
  categoryList = JSON.parse(localStorage.getItem('product-categories') || '[]');
  private fb = inject(FormBuilder)
  form = this.fb.group({
    id: this.fb.control<string | null>(null),
    sellerCategoryName: this.fb.control<string | null>(null, Validators.required),
    description: this.fb.control<string | null> (null),
    seller_ctg_status: this.fb.control<boolean | null> (null),
  })
  sellerCategorySubmit(){
    if(this.form.valid){
      const formValue = this.form.getRawValue()
      formValue.id=idGenerator()
      formValue.seller_ctg_status=false
      this.sellerCategoryList = JSON.parse(localStorage.getItem('seller-categories') || '[]');
      this.sellerCategoryList.push(formValue);
      localStorage.setItem('seller-categories', JSON.stringify(this.sellerCategoryList));
      this.form.reset();
      alert('Category saved SuccessFully');
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
