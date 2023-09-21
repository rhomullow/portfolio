import { Component } from '@angular/core';

import { projects } from './../../../project/list/list.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = projects;
}
