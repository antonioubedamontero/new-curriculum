import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CurriculumLayoutComponent } from './curriculum-layout.component';

const routes: Routes = [
  {
    path: 'web-developer',
    component: CurriculumLayoutComponent,
  },
  {
    path: '**',
    redirectTo: 'web-developer'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurriculumLayoutRoutingModule { }
