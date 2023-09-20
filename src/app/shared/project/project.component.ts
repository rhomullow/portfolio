import { Component, Input } from '@angular/core';

interface ProjectInfo { title: string, description: string, thumb: string }

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Input() info!: ProjectInfo;
}
