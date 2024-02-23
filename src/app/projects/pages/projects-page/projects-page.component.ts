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
      name: 'Productivity board',
      thumbnail: 'productivity-board.jpg',
      description: 'All in one productivity app (in progress)',
      url: 'https://deploy.dapbexih93zvq.amplifyapp.com/',
    },
  ];
}
