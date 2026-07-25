import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLayout } from './main-layout';
import { AuthService } from '../../../core/services/auth.service';
import { provideRouter } from '@angular/router';

describe('MainLayout', () => {
  let component: MainLayout;
  let fixture: ComponentFixture<MainLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MainLayout
      ],
      providers: [
        provideRouter([]),
        {
          provide: AuthService,
          useValue: {
            logout: jasmine.createSpy('logout'),
            user: null
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});