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
    {
      name: 'Terrenta',
      thumbnail: 'terrenta.png',
      description: 'Web application for the Crowdfunding Fintech Company',
      url: 'https://www.terrenta.co',
    },
    {
      name: 'La Nuit',
      thumbnail: 'lanuit.webp',
      description: 'Founder and Lead Developer at La Nuit Studio',
      url: 'https://www.lanuitstudio.com',
    },
    {
      name: 'Mundo Ambiente',
      thumbnail: 'mundoambiente.avif',
      description:
        'Low code landing page for Organización de Reciclaje Mundoambiente',
      url: 'https://mundoambiente.framer.ai/',
    },
  ];
}
