import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { ListComponent } from './list/list.component';
import { SingleComponent } from './single/single.component';

@NgModule({
  declarations: [ProjectComponent, ListComponent, SingleComponent],
  imports: [CommonModule],
  exports: [ProjectComponent],
})
export class ProjectModule {}
