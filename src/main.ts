import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app/app-routing.module';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { CoreModule } from './app/core/core.module';
import { environment } from './environments/environment';
import { SharedModule } from './app/shared/shared.module';
import { ModuleModule } from './app/modules/module.module';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      AppRoutingModule,
      ModuleModule,
      CoreModule,
      RouterModule,
      SharedModule
    ),
    provideAnimations(),
  ],
}).catch((err) => console.error(err));
