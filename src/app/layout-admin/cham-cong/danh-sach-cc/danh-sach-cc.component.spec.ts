import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachCCComponent } from './danh-sach-cc.component';

describe('DanhSachCCComponent', () => {
  let component: DanhSachCCComponent;
  let fixture: ComponentFixture<DanhSachCCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachCCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachCCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
