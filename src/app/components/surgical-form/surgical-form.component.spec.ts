import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgicalFormComponent } from './surgical-form.component';

describe('SurgicalFormComponent', () => {
  let component: SurgicalFormComponent;
  let fixture: ComponentFixture<SurgicalFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurgicalFormComponent]
    });
    fixture = TestBed.createComponent(SurgicalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
