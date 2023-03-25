import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperienceEditComponent } from './work-experience-edit.component';

describe('WorkExperienceEditComponent', () => {
  let component: WorkExperienceEditComponent;
  let fixture: ComponentFixture<WorkExperienceEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkExperienceEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkExperienceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
