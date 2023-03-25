import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSection1Component } from './profile-section1.component';

describe('ProfileSection1Component', () => {
  let component: ProfileSection1Component;
  let fixture: ComponentFixture<ProfileSection1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSection1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileSection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
