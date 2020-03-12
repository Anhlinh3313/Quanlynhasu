import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemNVComponent } from './them-nv.component';

describe('ThemNVComponent', () => {
  let component: ThemNVComponent;
  let fixture: ComponentFixture<ThemNVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemNVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemNVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
