import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent        } from '@components/app';
import { ElectronService     } from '@services/electron';

describe('AppComponent', () => {
  beforeEach(async(() => {
    void TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        ElectronService
      ],
      imports: [
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    void expect(app).toBeTruthy();
  }));
});

