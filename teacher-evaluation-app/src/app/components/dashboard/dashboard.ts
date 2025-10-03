import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Auth } from '../../services/auth';
import { Data } from '../../services/data';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  currentUser: string = '';
  currentPeriod: string = '';
  evaluationProgress: { completed: number; total: number; percentage: number } = {
    completed: 0,
    total: 0,
    percentage: 0
  };

  constructor(
    private authService: Auth,
    private dataService: Data,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    this.currentPeriod = this.dataService.getCurrentPeriod();
    this.evaluationProgress = this.dataService.getEvaluationProgress();
  }

  logout(): void {
    this.authService.logout();
  }

  navigateToTeachers(): void {
    this.router.navigate(['/teachers']);
  }

  navigateToHistory(): void {
    this.router.navigate(['/history']);
  }
}
