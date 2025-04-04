import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'es',
    loadChildren: () => import('./curriculum-layout/curriculum-layout.module').then(m => m.CurriculumLayoutModule)
  },
  {
    path: 'en',
    loadChildren: () => import('./curriculum-layout/curriculum-layout.module').then(m => m.CurriculumLayoutModule)
  },
  {
    path: '**',
    redirectTo: 'es'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
