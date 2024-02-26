import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent {
  public contactOptions = [
    {
      name: 'danielcaste1',
      icon: 'github.png',
      url: 'https://github.com/danielcaste1',
    },
    {
      name: 'Daniel Castellanos',
      icon: 'linkedin.png',
      url: 'https://www.linkedin.com/in/daniel-castellanos-a62a3721a/',
    },
    {
      name: '+57 3013500536',
      icon: 'whatsapp.png',
      url: 'https://api.whatsapp.com/send?phone=573013500536',
    },
    {
      name: 'danielcastellanos.dev@gmail.com',
      icon: 'mail.png',
      url: '#',
    },
  ];
}
