
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../core/services/employee.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {

  totalEmployees = 0;
  activeEmployees = 0;
  inactiveEmployees = 0;
  departments = 0;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadStats();
  }

  loadStats(): void {

    this.employeeService.getAll().subscribe(employees => {

      const list = employees ?? [];

      this.totalEmployees = list.length;

      this.activeEmployees = list.filter(e => e.status === 'Active').length;

      this.inactiveEmployees = list.filter(e => e.status === 'Inactive').length;

      this.departments = new Set(list.map(e => e.department)).size;

    });

  }

}

