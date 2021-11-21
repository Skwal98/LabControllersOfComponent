import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimitiveTextFieldComponent } from './primitive-text-field.component';

describe('PrimitiveTextFieldComponent', () => {
  let component: PrimitiveTextFieldComponent;
  let fixture: ComponentFixture<PrimitiveTextFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimitiveTextFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimitiveTextFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
