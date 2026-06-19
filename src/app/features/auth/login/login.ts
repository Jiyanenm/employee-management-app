import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    FormsModule   // ✅ THIS IS REQUIRED FOR ngModel
  ],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  email = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login(): void {
    this.authService.login(this.email, this.password)
      .then(() => {
        this.router.navigate(['/employees']);
      })
      .catch(err => {
        console.error(err);
        alert('Invalid login');
      });
  }
}