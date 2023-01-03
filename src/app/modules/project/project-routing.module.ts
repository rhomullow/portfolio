import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import { SingleComponent } from './single/single.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ListComponent,
    title: 'Rômulo Silva - Projetos',
  },
  {
    path: ':projectId',
    component: SingleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {}
