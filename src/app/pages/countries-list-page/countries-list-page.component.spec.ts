import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesListPageComponent } from './countries-list-page.component';

describe('CountriesListPageComponent', () => {
  let component: CountriesListPageComponent;
  let fixture: ComponentFixture<CountriesListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountriesListPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountriesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
