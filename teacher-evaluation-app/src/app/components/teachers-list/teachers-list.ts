import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Auth } from '../../services/auth';
import { Data, Teacher } from '../../services/data';

@Component({
  selector: 'app-teachers-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './teachers-list.html',
  styleUrl: './teachers-list.css'
})
export class TeachersList implements OnInit {
  teachers: Teacher[] = [];
  currentUser: string = '';

  constructor(
    private authService: Auth,
    private dataService: Data,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    this.teachers = this.dataService.getAssignedTeachers();
  }

  evaluateTeacher(teacherId: number): void {
    this.router.navigate(['/evaluate', teacherId]);
  }

  logout(): void {
    this.authService.logout();
  }
}
