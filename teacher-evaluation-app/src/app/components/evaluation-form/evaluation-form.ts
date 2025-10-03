import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Auth } from '../../services/auth';
import { Data, Teacher, EvaluationCategory, Evaluation } from '../../services/data';

@Component({
  selector: 'app-evaluation-form',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './evaluation-form.html',
  styleUrl: './evaluation-form.css'
})
export class EvaluationForm implements OnInit {
  teacher: Teacher | undefined;
  categories: EvaluationCategory[] = [];
  ratings: { [categoryId: number]: number } = {};
  comments: string = '';
  currentUser: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: Auth,
    private dataService: Data
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    const teacherId = Number(this.route.snapshot.paramMap.get('id'));
    this.teacher = this.dataService.getTeacherById(teacherId);
    this.categories = this.dataService.getEvaluationCategories();
    
    // Initialize ratings
    this.categories.forEach(cat => {
      this.ratings[cat.id] = 0;
    });
  }

  setRating(categoryId: number, rating: number): void {
    this.ratings[categoryId] = rating;
  }

  isValid(): boolean {
    return Object.values(this.ratings).every(rating => rating >= 1 && rating <= 4);
  }

  onSubmit(): void {
    if (!this.isValid() || !this.teacher) {
      alert('Por favor, califique todos los rubros antes de enviar.');
      return;
    }

    const evaluation: Evaluation = {
      id: 0,
      teacherId: this.teacher.id,
      teacherName: this.teacher.name,
      date: new Date(),
      period: this.dataService.getCurrentPeriod(),
      ratings: { ...this.ratings },
      comments: this.comments
    };

    this.dataService.addEvaluation(evaluation);
    this.router.navigate(['/success']);
  }

  logout(): void {
    this.authService.logout();
  }
}
