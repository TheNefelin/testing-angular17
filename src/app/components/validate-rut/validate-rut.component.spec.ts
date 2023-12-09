import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateRutComponent } from './validate-rut.component';

describe('ValidateRutComponent', () => {
  let component: ValidateRutComponent;
  let fixture: ComponentFixture<ValidateRutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidateRutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidateRutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
