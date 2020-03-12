import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongTinNhanvienComponent } from './thong-tin-nhanvien.component';

describe('ThongTinNhanvienComponent', () => {
  let component: ThongTinNhanvienComponent;
  let fixture: ComponentFixture<ThongTinNhanvienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongTinNhanvienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinNhanvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
