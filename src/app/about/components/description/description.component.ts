import { Component } from '@angular/core';

interface Metric {
  value: string;
  description: string;
}

@Component({
  selector: 'description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent {
  public metrics: Metric[] = [
    {
      value: '3+',
      description: 'Years learning about web development',
    },
    {
      value: '1+',
      description: 'Years of experience as professional Web Developer',
    },
  ];
}
