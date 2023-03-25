import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduHistoryComponent } from './edu-history.component';

describe('EduHistoryComponent', () => {
  let component: EduHistoryComponent;
  let fixture: ComponentFixture<EduHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EduHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EduHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
