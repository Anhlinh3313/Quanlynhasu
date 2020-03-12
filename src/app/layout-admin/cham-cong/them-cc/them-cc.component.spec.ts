import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemCCComponent } from './them-cc.component';

describe('ThemCCComponent', () => {
  let component: ThemCCComponent;
  let fixture: ComponentFixture<ThemCCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemCCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemCCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
