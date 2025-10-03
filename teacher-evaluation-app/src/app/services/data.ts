import { Injectable } from '@angular/core';

export interface Teacher {
  id: number;
  name: string;
  subject: string;
  assigned: boolean;
}

export interface EvaluationCategory {
  id: number;
  name: string;
  description: string;
}

export interface Evaluation {
  id: number;
  teacherId: number;
  teacherName: string;
  date: Date;
  period: string;
  ratings: { [categoryId: number]: number };
  comments?: string;
}

@Injectable({
  providedIn: 'root'
})
export class Data {
  private teachers: Teacher[] = [
    { id: 1, name: 'Dr. Juan Pérez', subject: 'Matemáticas', assigned: true },
    { id: 2, name: 'Dra. María González', subject: 'Física', assigned: true },
    { id: 3, name: 'Prof. Carlos Ramírez', subject: 'Química', assigned: true },
    { id: 4, name: 'Dra. Ana López', subject: 'Biología', assigned: true },
    { id: 5, name: 'Prof. Luis Martínez', subject: 'Historia', assigned: true }
  ];

  private evaluationCategories: EvaluationCategory[] = [
    { id: 1, name: 'Dominio del tema', description: 'El profesor demuestra conocimiento profundo de la materia' },
    { id: 2, name: 'Claridad en la explicación', description: 'Las explicaciones son claras y comprensibles' },
    { id: 3, name: 'Gestión del aula', description: 'Mantiene orden y control apropiado de la clase' },
    { id: 4, name: 'Interacción con estudiantes', description: 'Fomenta la participación y el diálogo' },
    { id: 5, name: 'Puntualidad', description: 'Llega a tiempo y respeta los horarios' },
    { id: 6, name: 'Material didáctico', description: 'Utiliza recursos apropiados y efectivos' },
    { id: 7, name: 'Evaluación justa', description: 'Los criterios de evaluación son claros y justos' },
    { id: 8, name: 'Motivación', description: 'Inspira interés y motivación en los estudiantes' }
  ];

  private evaluations: Evaluation[] = [
    {
      id: 1,
      teacherId: 1,
      teacherName: 'Dr. Juan Pérez',
      date: new Date('2024-01-15'),
      period: '2024-1',
      ratings: { 1: 4, 2: 4, 3: 3, 4: 4, 5: 4, 6: 3, 7: 4, 8: 4 },
      comments: 'Excelente profesor, muy preparado'
    },
    {
      id: 2,
      teacherId: 2,
      teacherName: 'Dra. María González',
      date: new Date('2024-01-20'),
      period: '2024-1',
      ratings: { 1: 4, 2: 3, 3: 4, 4: 4, 5: 4, 6: 4, 7: 3, 8: 4 },
      comments: 'Muy buena profesora'
    }
  ];

  private currentPeriod = '2025-1';

  constructor() { }

  getTeachers(): Teacher[] {
    return this.teachers;
  }

  getAssignedTeachers(): Teacher[] {
    return this.teachers.filter(t => t.assigned);
  }

  getTeacherById(id: number): Teacher | undefined {
    return this.teachers.find(t => t.id === id);
  }

  getEvaluationCategories(): EvaluationCategory[] {
    return this.evaluationCategories;
  }

  getEvaluations(): Evaluation[] {
    return this.evaluations;
  }

  getCurrentPeriod(): string {
    return this.currentPeriod;
  }

  addEvaluation(evaluation: Evaluation): void {
    evaluation.id = this.evaluations.length + 1;
    evaluation.period = this.currentPeriod;
    this.evaluations.push(evaluation);
  }

  getEvaluationProgress(): { completed: number; total: number; percentage: number } {
    const assignedTeachers = this.getAssignedTeachers();
    const completedEvaluations = this.evaluations.filter(
      e => e.period === this.currentPeriod
    );
    const total = assignedTeachers.length;
    const completed = completedEvaluations.length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { completed, total, percentage };
  }
}
