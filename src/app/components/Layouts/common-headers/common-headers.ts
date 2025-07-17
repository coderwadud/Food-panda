import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-common-headers',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './common-headers.html',
  styleUrl: './common-headers.css',
})
export class CommonHeaders {

}
