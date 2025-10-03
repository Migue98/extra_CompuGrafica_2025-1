import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Auth } from '../../services/auth';
import { Data, Evaluation } from '../../services/data';

@Component({
  selector: 'app-history',
  imports: [CommonModule, RouterModule],
  templateUrl: './history.html',
  styleUrl: './history.css'
})
export class History implements OnInit {
  evaluations: Evaluation[] = [];
  currentUser: string = '';

  constructor(
    private authService: Auth,
    private dataService: Data
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    this.evaluations = this.dataService.getEvaluations();
  }

  getAverageRating(evaluation: Evaluation): number {
    const ratings = Object.values(evaluation.ratings);
    const sum = ratings.reduce((a, b) => a + b, 0);
    return Math.round((sum / ratings.length) * 10) / 10;
  }

  logout(): void {
    this.authService.logout();
  }
}
