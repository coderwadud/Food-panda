import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SellerSidebar } from '../Layouts/seller-sidebar/seller-sidebar';

@Component({
  selector: 'app-seller',
  imports: [RouterOutlet, SellerSidebar],
  templateUrl: './seller.html',
  styleUrl: './seller.css'
})
export class Seller {

}
