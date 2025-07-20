import { Component, inject } from '@angular/core';
import { fullAddress, SellerCategoryForm, SellerProfileForm } from '../../../model/data.type';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { generateStringId } from '../../../core/id.generator';

@Component({
  selector: 'app-create-seller',
  imports: [ReactiveFormsModule],
  templateUrl: './create-seller.html',
  styleUrl: './create-seller.css'
})
export class CreateSeller {
  sellerList : Array<SellerProfileForm>= []
  userFullAddress : Array<fullAddress>= []
  private fb = inject(FormBuilder)
  form = this.fb.group({
    sellerInfo: this.fb.group({
      id: this.fb.control<string | null>(null),
      shopName: this.fb.control<string | null>(null, Validators.required),
      sellerName: this.fb.control<string | null>(null, Validators.required),
      email: this.fb.control<string | null>(null, Validators.required),
      phone: this.fb.control<string | null>(null, Validators.required),
      sellerCategoryId: this.fb.control<string | null>(null, Validators.required),
      photo: this.fb.control<string | null> (null),
      tinNumber: this.fb.control<string | null> (null),
      vatNumber: this.fb.control<string | null> (null),
      sellerStatus: this.fb.control<boolean | null> (false),
    }),
    locations: this.fb.group({
      id: this.fb.control<string | null>(null),
      houseName: this.fb.control<string | null>(null),
      street: this.fb.control<string | null>(null),
      area: this.fb.control<string | null>(null),
      postOffice: this.fb.control<string | null>(null),
      postalCode: this.fb.control<string | null> (null),
      city: this.fb.control<string | null> (null),
      country: this.fb.control<string | null> (null),
      addressLine1: this.fb.control<string | null> (null),
      addressLine2: this.fb.control<string | null> (null),
      landmark: this.fb.control<string | null> (null),
      userForane_key: this.fb.control<string | null> (null),
    })
  })
  sellerCategoryList = JSON.parse(localStorage.getItem('seller-categories') || '[]');

    userFullAddressprevDAta = JSON.parse(localStorage.getItem('location') || '[]');
    sellerListprevDAta = JSON.parse(localStorage.getItem('seller-profile') || '[]');
  onSubmit(){
    if(this.form.valid){
      const formValue = this.form.getRawValue()
      formValue.sellerInfo.id=generateStringId(this.sellerListprevDAta)
      formValue.locations.id=generateStringId(this.userFullAddressprevDAta)
      formValue.sellerInfo.sellerStatus=false
      formValue.locations.userForane_key= formValue.sellerInfo.id
      const sellerInfo = formValue.sellerInfo
      const addressInfo = formValue.locations
      this.sellerList = JSON.parse(localStorage.getItem('seller-profile') || '[]');
      this.sellerList.push(sellerInfo);
      this.userFullAddress = JSON.parse(localStorage.getItem('location') || '[]');
      this.userFullAddress.push(addressInfo);
      localStorage.setItem('seller-profile', JSON.stringify(this.sellerList));
      localStorage.setItem('location', JSON.stringify(this.userFullAddress));
      this.form.reset();
      alert("Seller Create Successfully");
    } else {
      alert('Please fill out the form correctly.');
    }
  }

   ngOnInit() {
      this.sellerCategoryList = this.sellerCategoryList.filter(
        (category: SellerCategoryForm) => category.seller_ctg_status === true
      );
    }
}
