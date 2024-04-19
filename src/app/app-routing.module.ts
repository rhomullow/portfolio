import {
  Routes,
  RouterModule,
  TitleStrategy,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable, NgModule } from '@angular/core';

import { HomeComponent } from './modules/home/home.component';
import { Title } from '@angular/platform-browser';

@Injectable()
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`Rômulo Silva - ${title}`);
    }
  }
}

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    title: 'Perfil profissional e portifolio',
  },
  /* {
    path: 'projects',
    loadChildren: () =>
      import('./modules/project/project.module').then((m) => m.ProjectModule),
    title: 'Projetos',
  }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: TitleStrategy,
      useClass: TemplatePageTitleStrategy,
    },
  ],
})
export class AppRoutingModule {}
