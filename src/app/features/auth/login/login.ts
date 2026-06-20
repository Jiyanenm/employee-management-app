import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { ToastService } from '../../../core/services/toast.service';
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

    loading = false;

    credentials = {
        email: '',
        password: ''
    };

constructor(
    private authService: AuthService,
    private router: Router,
    private toast: ToastService
) {}

    login(form: any): void {

        if (form.invalid) {
            Object.values(form.controls).forEach((c: any) => c.markAsTouched());
            return;
        }

       this.loading = true;

this.authService.login(this.credentials)
.then(() => {

    this.toast.success('Login successful');

    setTimeout(() => {
        this.router.navigate(['/employees']);
    }, 500);

})
.catch(() => {

    this.toast.error('Invalid email or password');

})
.finally(() => {

    this.loading = false;

});
    }
}