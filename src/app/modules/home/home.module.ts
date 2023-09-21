import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from './../../shared/shared.module';

import { HomeComponent } from './home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  declarations: [HomeComponent, ProfileComponent, CertificatesComponent, ProjectsComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [HomeComponent],
})
export class HomeModule { }
