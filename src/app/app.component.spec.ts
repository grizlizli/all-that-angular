import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should render 'All That Angular' as title`, () => {
    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('h1')?.textContent).toContain('All That Angular');
  });

  it(`should render 'All That Angular' as title [By example]`, () => {
    const titleElement: any = fixture.debugElement.query(
      By.css(
        '[data-testid="mk-app-title"]'
      )
    );
    expect(titleElement.nativeElement.textContent).toContain('All That Angular');
  });
});
