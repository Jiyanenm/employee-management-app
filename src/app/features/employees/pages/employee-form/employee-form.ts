import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastService } from '../../../../core/services/toast.service';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom } from 'rxjs';
import { EmployeeService } from '../../../../core/services/employee.service';
import { Employee } from '../../models/employee.model';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './employee-form.html',
    styleUrls: ['./employee-form.css']   //  MUST be styleUrls (NOT styleUrl)
})
export class EmployeeForm implements OnInit {

  isEditMode = false;
  employeeId = '';
  loading = false;

  employee: Employee = {
    name: '',
    email: '',
    department: '',
    status: 'Active'
  };

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.isEditMode = true;
      this.employeeId = id;

      this.employeeService.getById(id).subscribe({
        next: (data) => {
          this.employee = data;
        },
        error: () => {
          this.toast.error('Failed to load employee');
        }
      });
    }
  }

saving = false;

async saveEmployee(empForm: any): Promise<void> {

    if (this.saving) return;

    if (empForm.invalid) {
        Object.values(empForm.controls).forEach((control: any) => {
            control.markAsTouched();
        });
        return;
    }

    this.saving = true;

    const request = this.isEditMode
        ? this.employeeService.update(this.employee)
        : this.employeeService.add(this.employee);

    request
.then(() => {

    this.toast.success(
        this.isEditMode ? 'Employee updated' : 'Employee added'
    );

    setTimeout(() => {
        this.router.navigate(['/employees']);
    }, 500);

})
.catch(() => {

    this.toast.error('Failed to save employee');

})
.finally(() => {

    this.saving = false;

});
}
resetForm(): void {
    this.employee = {
        name: '',
        email: '',
        department: '',
        status: 'Active'
    };
}
}