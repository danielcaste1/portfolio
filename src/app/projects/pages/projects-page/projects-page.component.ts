import { Component } from '@angular/core';
import { Project } from '../../interfaces';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
})
export class ProjectsPageComponent {
  public projects: Project[] = [
    {
      name: 'Fundación Siruela',
      thumbnail: 'fsiruela.png',
      description: 'Landing page for Siruela Foundation',
      url: 'https://www.fundacionsiruela.org/',
    },
  ];
}
