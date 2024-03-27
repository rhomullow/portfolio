import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PillComponent, ProjectComponent, DialogComponent } from './index';

@NgModule({
  declarations: [PillComponent, ProjectComponent, DialogComponent],
  imports: [CommonModule],
  exports: [PillComponent, ProjectComponent, DialogComponent],
})
export class SharedModule {}
