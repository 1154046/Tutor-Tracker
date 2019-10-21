import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCoursesPage } from './admin-courses.page';

describe('AdminCoursesPage', () => {
  let component: AdminCoursesPage;
  let fixture: ComponentFixture<AdminCoursesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCoursesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCoursesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
