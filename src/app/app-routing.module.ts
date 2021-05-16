import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataDrivenComponent } from './data-driven/data-driven.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

const routes: Routes = [
  {path: 'template', component: TemplateDrivenComponent},
  {path: 'data', component: DataDrivenComponent},
  {path: '', pathMatch: 'full', redirectTo: 'template'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
