import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonHeaders } from './components/Layouts/common-headers/common-headers';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonHeaders],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'food-panda';
}
