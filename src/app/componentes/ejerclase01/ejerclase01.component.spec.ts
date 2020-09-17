import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejerclase01Component } from './ejerclase01.component';

describe('Ejerclase01Component', () => {
  let component: Ejerclase01Component;
  let fixture: ComponentFixture<Ejerclase01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ejerclase01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejerclase01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
