import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

const routesConfig: Routes = [
  {path:'danhsachcc', component: DanhSachCCComponent},
  {path:'themcc', component: ThemCCComponent},
  {path:'suacc', component: SuaCCComponent},
  {path:'danhsachtt', component: DanhSachNVComponent},
  {path:'themtt', component: ThemNVComponent},
  {path:'suatt', component: SuaNVComponent},

]

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';
import { ThongTinNhanvienComponent } from './layout-admin/thong-tin-nhanvien/thong-tin-nhanvien.component';
import { DanhSachNVComponent } from './layout-admin/thong-tin-nhanvien/danh-sach-nv/danh-sach-nv.component';
import { ThemNVComponent } from './layout-admin/thong-tin-nhanvien/them-nv/them-nv.component';
import { SuaNVComponent } from './layout-admin/thong-tin-nhanvien/sua-nv/sua-nv.component';
import { ChamCongComponent } from './layout-admin/cham-cong/cham-cong.component';
import { ThemCCComponent } from './layout-admin/cham-cong/them-cc/them-cc.component';
import { SuaCCComponent } from './layout-admin/cham-cong/sua-cc/sua-cc.component';
import { DanhSachCCComponent } from './layout-admin/cham-cong/danh-sach-cc/danh-sach-cc.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutAdminComponent,
    ThongTinNhanvienComponent,
    DanhSachNVComponent,
    ThemNVComponent,
    SuaNVComponent,
    ChamCongComponent,
    ThemCCComponent,
    SuaCCComponent,
    DanhSachCCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routesConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
