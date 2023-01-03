import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModule } from './home/home.module';
import { ProjectModule } from './project/project.module';

@NgModule({
  imports: [CommonModule, HomeModule, ProjectModule],
  exports: [HomeModule, ProjectModule],
})
export class ModuleModule {}
