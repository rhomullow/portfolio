import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list/list.component';
import { SingleComponent } from './single/single.component';
import { ProjectRoutingModule } from './project-routing.module';

@NgModule({
  declarations: [ListComponent, SingleComponent],
  imports: [CommonModule, ProjectRoutingModule],
  exports: [ListComponent, SingleComponent],
})
export class ProjectModule {}
