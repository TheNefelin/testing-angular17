import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompPadreComponent } from './comp-padre.component';

describe('CompPadreComponent', () => {
  let component: CompPadreComponent;
  let fixture: ComponentFixture<CompPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompPadreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
