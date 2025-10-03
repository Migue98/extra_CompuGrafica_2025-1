import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';
import { TeachersList } from './components/teachers-list/teachers-list';
import { History } from './components/history/history';
import { EvaluationForm } from './components/evaluation-form/evaluation-form';
import { Success } from './components/success/success';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard, canActivate: [authGuard] },
  { path: 'teachers', component: TeachersList, canActivate: [authGuard] },
  { path: 'history', component: History, canActivate: [authGuard] },
  { path: 'evaluate/:id', component: EvaluationForm, canActivate: [authGuard] },
  { path: 'success', component: Success, canActivate: [authGuard] },
  { path: '**', redirectTo: '/login' }
];
