import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ProjectComponent } from './components/project/project.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProjectsPageComponent, ProjectComponent],
  imports: [CommonModule, RouterModule],
})
export class ProjectsModule {}
