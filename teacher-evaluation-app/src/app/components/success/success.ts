import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-success',
  imports: [CommonModule, RouterModule],
  templateUrl: './success.html',
  styleUrl: './success.css'
})
export class Success {
  constructor(private authService: Auth) {}

  logout(): void {
    this.authService.logout();
  }
}
