import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinnerComponent } from './spinner/spinner.component';
import { BaseModule } from '../base/base.module';

@NgModule({
  declarations: [
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    BaseModule
  ],
  exports: [
    SpinnerComponent
  ]
})
export class SharedModule { }
