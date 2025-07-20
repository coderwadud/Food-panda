import { Component } from '@angular/core';
import { SellerProfileForm } from '../../../../model/data.type';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-seller-list',
  imports: [RouterLink],
  templateUrl: './seller-list.html',
  styleUrl: './seller-list.css'
})
export class SellerList {
  sellerList : Array<SellerProfileForm>= []
  constructor(){
    this.sellerList = JSON.parse(localStorage.getItem('seller-profile') || '[]');
  }
  approveStatus(id: string){
    const status = this.sellerList.find((item=>item.id===id));
    if(status){
      status.sellerStatus=true;
      localStorage.setItem('seller-profile', JSON.stringify(this.sellerList))
    }
  }
  pendingStatus(id: string){
    const status = this.sellerList.find((item=>item.id===id));
    if(status){
      status.sellerStatus=false;
      localStorage.setItem('seller-profile', JSON.stringify(this.sellerList))
    }
  }
}
