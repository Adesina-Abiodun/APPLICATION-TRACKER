import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationInfoEditComponent } from './education-info-edit.component';

describe('EducationInfoEditComponent', () => {
  let component: EducationInfoEditComponent;
  let fixture: ComponentFixture<EducationInfoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationInfoEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationInfoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
