import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

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
    private toastr: ToastrService
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
          this.toastr.error('Failed to load employee');
        }
      });
    }
  }

saveEmployee(): void {

  this.loading = true;

  if (this.isEditMode) {

    this.employee.id = this.employeeId;

    this.employeeService.update(this.employee)
      .then(() => {

        this.toastr.success('Employee updated successfully');
        this.router.navigate(['/employees']);

      })
      .catch(() => {

        this.toastr.error('Failed to update employee');

      })
      .finally(() => this.loading = false);

  } else {

    this.employeeService.add(this.employee)
      .then(() => {

        this.toastr.success('Employee added successfully');
        this.router.navigate(['/employees']);

      })
      .catch(() => {

        this.toastr.error('Failed to add employee');

      })
      .finally(() => this.loading = false);
  }
}
}