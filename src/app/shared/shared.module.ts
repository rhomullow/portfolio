import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PillComponent, ProjectComponent } from './index';


@NgModule({
  declarations: [PillComponent, ProjectComponent],
  imports: [
    CommonModule,
  ],
  exports: [PillComponent, ProjectComponent],
})
export class SharedModule { }
