import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    title: 'Rômulo Silva',
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./modules/project/project.module').then((m) => m.ProjectModule),
    title: 'Rômulo Silva - Projetos',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
