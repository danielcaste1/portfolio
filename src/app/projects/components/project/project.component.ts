import { Component, Input } from '@angular/core';
import { Project } from '../../interfaces';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  @Input() project!: Project;
  public openProject(url: string) {
    window.open(url, '_blank');
  }
}
