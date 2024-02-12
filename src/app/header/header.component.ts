import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public headerLinks = [
    { name: 'Home', route: 'home' },
    { name: 'Projects', route: 'projects' },
    { name: 'About', route: 'about' },
  ];
}
