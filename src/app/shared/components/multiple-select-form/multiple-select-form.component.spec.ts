import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleSelectFormComponent } from './multiple-select-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IsSubstringPipe } from '../../pipes/string-is-substring.pipe';

describe('MultipleSelectFormComponent', () => {
  let component: MultipleSelectFormComponent;
  let fixture: ComponentFixture<MultipleSelectFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultipleSelectFormComponent, ReactiveFormsModule, IsSubstringPipe]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultipleSelectFormComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('options', ['one', 'two', 'three']);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
