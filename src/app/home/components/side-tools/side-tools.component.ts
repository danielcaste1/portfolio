import { Component } from '@angular/core';

@Component({
  selector: 'app-side-tools',
  templateUrl: './side-tools.component.html',
  styleUrls: ['./side-tools.component.scss'],
})
export class SideToolsComponent {
  public sideTools = [
    {
      icon: 'html.png',
    },
    {
      icon: 'css.png',
    },
    {
      icon: 'js.png',
    },
    {
      icon: 'figma.png',
    },
    {
      icon: 'vscode.png',
    },
    {
      icon: 'github.svg',
    },
    {
      icon: 'jira.png',
    },
    {
      icon: 'miro.png',
    },
  ];
}
