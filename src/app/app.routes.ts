import { Routes } from '@angular/router';

import { MainLayout } from './core/layout/main-layout/main-layout';

import { EmployeeList } from './features/employees/pages/employee-list/employee-list';
import { EmployeeForm } from './features/employees/pages/employee-form/employee-form';

import { Login } from './features/auth/login/login';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [

  // Public routes
  {
    path: 'login',
    component: Login
  },

  {
    path: 'register',
    loadComponent: () =>
      import('./features/auth/register/register')
        .then(m => m.Register)
  },


  // Protected routes
  {
    path: '',
    component: MainLayout,
    canActivate: [authGuard],

    children: [

      {
        path: '',
        redirectTo: 'employees',
        pathMatch: 'full'
      },

      {
        path: 'employees',
        component: EmployeeList
      },

      {
        path: 'employees/add',
        component: EmployeeForm
      },

      {
        path: 'employees/edit/:id',
        component: EmployeeForm
      }

    ]
  },


  // Unknown routes
  {
    path: '**',
    redirectTo: 'login'
  }

];