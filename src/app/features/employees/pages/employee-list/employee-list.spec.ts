import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeList } from './employee-list';
import { EmployeeService } from '../../../../core/services/employee.service';
import { ToastService } from '../../../../core/services/toast.service';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';

describe('EmployeeList', () => {
  let component: EmployeeList;
  let fixture: ComponentFixture<EmployeeList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        EmployeeList
      ],
      providers: [
        provideRouter([]),

        {
          provide: EmployeeService,
          useValue: {
            getAll: jasmine.createSpy('getAll')
              .and.returnValue(of([])),

            deleteEmployee: jasmine.createSpy('deleteEmployee')
              .and.returnValue(of(true))
          }
        },

        {
          provide: ToastService,
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

    fixture = TestBed.createComponent(EmployeeList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});