import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaNVComponent } from './sua-nv.component';

describe('SuaNVComponent', () => {
  let component: SuaNVComponent;
  let fixture: ComponentFixture<SuaNVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuaNVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuaNVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
