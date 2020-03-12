import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachNVComponent } from './danh-sach-nv.component';

describe('DanhSachNVComponent', () => {
  let component: DanhSachNVComponent;
  let fixture: ComponentFixture<DanhSachNVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachNVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachNVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
