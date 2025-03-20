import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsideComponent } from './components/aside/aside.component';
import { BaseModule } from '../base/base.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { TranslateModule } from '@ngx-translate/core';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    BaseModule,
    TranslateModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
