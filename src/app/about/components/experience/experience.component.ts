import { Component } from '@angular/core';

interface Experience {
  title: string;
  place: string;
  from: number;
  to: number;
}

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  public educationExperience: Experience[] = [
    {
      title: 'Systems Technician',
      place: 'SENA',
      from: 2020,
      to: 2021,
    },
    {
      title: 'Misión TIC participant',
      place: 'Sergio Arboleda University',
      from: 2021,
      to: 2021,
    },
    {
      title: 'Web Developer',
      place: 'Platzi',
      from: 2019,
      to: 0,
    },
  ];
  public workExperience: Experience[] = [
    {
      title: 'Software Developer',
      place: 'Terrenta S.A.',
      from: 2022,
      to: 0,
    },
  ];
}
