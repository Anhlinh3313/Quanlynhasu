import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaCCComponent } from './sua-cc.component';

describe('SuaCCComponent', () => {
  let component: SuaCCComponent;
  let fixture: ComponentFixture<SuaCCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuaCCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuaCCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
