import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../../../../core/services/toast.service';
import { EmployeeService } from '../../../../core/services/employee.service';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './employee-list.html',
      styleUrls: ['./employee-list.css']   //  MUST be styleUrls (NOT styleUrl)
})
export class EmployeeList implements OnInit {

  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  loading = true;
totalEmployees = 0;
activeEmployees = 0;
inactiveEmployees = 0;
departments = 0;
  searchTerm = '';

  constructor(
  private employeeService: EmployeeService,
  private toast: ToastService
) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

loadEmployees(): void {
  this.loading = true;

  this.employeeService.getAll().subscribe({
    next: (data) => {
      this.employees = data ?? [];
      this.filteredEmployees = [...this.employees];
      this.loading = false;
    },
    error: (err) => {
      console.error(err);
      this.employees = [];
      this.filteredEmployees = [];
      this.loading = false;
    }
  });
}
pageSize = 5;
currentPage = 0;

get paginatedEmployees() {
  const start = this.currentPage * this.pageSize;
  return this.filteredEmployees.slice(start, start + this.pageSize);
}
onSearch(): void {
  const term = this.searchTerm.toLowerCase().trim();
  this.currentPage = 0; // ✅ reset pagination

  if (!term) {
    this.filteredEmployees = [...this.employees];
    return;
  }

  this.filteredEmployees = this.employees.filter(emp =>
emp.name?.toLowerCase().includes(term) ||
emp.email?.toLowerCase().includes(term) ||
emp.department?.toLowerCase().includes(term)
  );
}

  deleteEmployee(id?: string): void {
    if (!id) return;
    if (!confirm('Delete employee?')) return;

this.employeeService.delete(id)
  .then(() => {

    this.toast.success('Employee deleted');

    this.loadEmployees();

  })
  .catch(() => {

    this.toast.error('Failed to delete employee');

  });
  }
}