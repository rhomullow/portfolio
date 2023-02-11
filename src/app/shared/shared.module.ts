import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PillComponent } from './index';


@NgModule({
  declarations: [PillComponent],
  imports: [
    CommonModule
  ],
  exports: [PillComponent],
})
export class SharedModule { }
