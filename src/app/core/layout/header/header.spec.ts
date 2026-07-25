import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Header } from './header';
import { AuthService } from '../../../core/services/auth.service';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [
        {
          provide: AuthService,
          useValue: {
            logout: jasmine.createSpy('logout')
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});