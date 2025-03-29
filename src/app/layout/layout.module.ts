import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { AsideComponent } from './components/aside/aside.component';
import { BaseModule } from '../base/base.module';
import { CompanyProjectsComponent } from './components/main/components/company-projects/company-projects.component';
import { CompanySectionComponent } from './components/main/components/company-section/company-section.component';
import { ExperienceItemComponent } from './components/main/components/experience-item/experience-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './layout.component';
import { MainComponent } from './components/main/main.component';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    AsideComponent,
    CompanyProjectsComponent,
    CompanySectionComponent,
    ExperienceItemComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    BaseModule,
    TranslateModule,
    SharedModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
