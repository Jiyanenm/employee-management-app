import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeForm } from './employee-form';
import { EmployeeService } from '../../../../core/services/employee.service';
import { ToastrService } from 'ngx-toastr';
import { provideRouter } from '@angular/router';

describe('EmployeeForm', () => {
  let component: EmployeeForm;
  let fixture: ComponentFixture<EmployeeForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        EmployeeForm
      ],
      providers: [
        provideRouter([]),

        {
          provide: EmployeeService,
          useValue: {
            addEmployee: jasmine.createSpy('addEmployee'),
            updateEmployee: jasmine.createSpy('updateEmployee'),
            getEmployees: jasmine.createSpy('getEmployees')
          }
        },

        // ADD THIS
        {
          provide: ToastrService,
          useValue: {
            success: jasmine.createSpy('success'),
            error: jasmine.createSpy('error'),
            warning: jasmine.createSpy('warning'),
            info: jasmine.createSpy('info')
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});