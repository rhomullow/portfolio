import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PillComponent } from './pill/pill.component';
import { DialogComponent } from './dialog/dialog.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [PillComponent, ProjectComponent, DialogComponent],
  imports: [CommonModule],
  exports: [PillComponent, ProjectComponent, DialogComponent],
})
export class SharedModule {}
