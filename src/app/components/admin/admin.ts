import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminSidebar } from '../Layouts/admin-sidebar/admin-sidebar';

@Component({
  selector: 'app-admin',
  imports: [RouterOutlet, AdminSidebar],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin {

}
