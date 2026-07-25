import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../core/services/auth.service';
import { EmployeeService } from '../../../core/services/employee.service';
import { ToastService } from '../../../core/services/toast.service';

import { Employee } from '../../employees/models/employee.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  loading = false;

  user = {
    name: '',
    email: '',
    password: '',
    department: ''
  };


  constructor(
    private authService: AuthService,
    private employeeService: EmployeeService,
    private router: Router,
    private toast: ToastService
  ) {}


  register(form: any): void {

    if (form.invalid) {

      Object.values(form.controls)
        .forEach((c: any) => c.markAsTouched());

      return;
    }


    this.loading = true;


    this.authService.register(
      this.user.email,
      this.user.password
    )
    .then(result => {


      const employee: Employee = {

        id: result.user.uid,

        name: this.user.name,

        email: this.user.email,

        department: this.user.department,

        status: 'Active'

      };


      return this.employeeService.add(employee);


    })
    .then(() => {

      this.toast.success('Account created successfully');

      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 500);

    })
    .catch(() => {

      this.toast.error('Unable to create account');

    })
    .finally(() => {

      this.loading = false;

    });

  }


  backToLogin(): void {

    this.router.navigate(['/login']);

  }

}