/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PaginationPageComponent } from './pagination-page.component';

describe('PaginationPageComponent', () => {
  let component: PaginationPageComponent;
  let fixture: ComponentFixture<PaginationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
