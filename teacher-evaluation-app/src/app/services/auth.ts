import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private isAuthenticated = false;
  private currentUser: string = '';

  constructor(private router: Router) { 
    // Check if user is logged in from localStorage
    const user = localStorage.getItem('currentUser');
    if (user) {
      this.isAuthenticated = true;
      this.currentUser = user;
    }
  }

  login(username: string, password: string): boolean {
    // Simple authentication logic (in real app, this would call an API)
    if (username && password) {
      this.isAuthenticated = true;
      this.currentUser = username;
      localStorage.setItem('currentUser', username);
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.currentUser = '';
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getCurrentUser(): string {
    return this.currentUser;
  }
}
