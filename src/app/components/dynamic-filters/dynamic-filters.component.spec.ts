import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFiltersComponent } from './dynamic-filters.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StringIsSubstringPipe } from '../../pipes/string-is-substring.pipe';

describe('DynamicFiltersComponent', () => {
  let component: DynamicFiltersComponent;
  let fixture: ComponentFixture<DynamicFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicFiltersComponent, ReactiveFormsModule, StringIsSubstringPipe]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynamicFiltersComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('options', ['one', 'two', 'three']);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit value on submit', () => {
    const valueChangeEmitSpy = spyOn(component.valueChange, 'emit');
    component.onSubmit();
    expect(valueChangeEmitSpy).toHaveBeenCalledWith([]);
  });
});
