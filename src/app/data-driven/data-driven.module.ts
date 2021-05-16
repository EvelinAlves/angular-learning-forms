import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataDrivenComponent } from './data-driven.component';

@NgModule({
  declarations: [
    DataDrivenComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DataDrivenModule { }
