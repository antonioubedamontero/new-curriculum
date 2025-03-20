import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsideComponent } from './components/aside/aside.component';
import { BaseModule } from '../base/base.module';
import { CompanyProjectComponent } from './components/main/components/company-project/company-project.component';
import { CompanySectionComponent } from './components/main/components/company-section/company-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './layout.component';
import { MainComponent } from './components/main/main.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AsideComponent,
    CompanyProjectComponent,
    CompanySectionComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    MainComponent,
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
