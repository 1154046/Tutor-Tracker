import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLecturerPage } from './home-lecturer.page';

describe('HomeLecturerPage', () => {
  let component: HomeLecturerPage;
  let fixture: ComponentFixture<HomeLecturerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLecturerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLecturerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
