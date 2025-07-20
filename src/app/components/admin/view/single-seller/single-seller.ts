import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fullAddress, SellerProfileForm } from '../../../../model/data.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-seller',
  imports: [CommonModule],
  templateUrl: './single-seller.html',
  styleUrl: './single-seller.css'
})
export class SingleSeller {
 sellerProfile!: SellerProfileForm | undefined;
  sellerAddress!: fullAddress | undefined
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const storedData = localStorage.getItem('seller-profile');
      if (storedData) {
        const sellerList: SellerProfileForm[] = JSON.parse(storedData);
        this.sellerProfile = sellerList.find(seller => seller.id === id);
      }
      const resultData = localStorage.getItem('location');
      if (resultData) {
        const locationList: fullAddress[] = JSON.parse(resultData);
        this.sellerAddress = locationList.find(result => result.id === this.sellerProfile?.id);
      }
    }
  }
}
