import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { DescriptionComponent } from './components/description/description.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AboutPageComponent,
    DescriptionComponent,
    ExperienceComponent,
    CompaniesComponent,
  ],
  imports: [SharedModule, CommonModule],
})
export class AboutModule {}
