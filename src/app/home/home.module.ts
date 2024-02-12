import { NgModule } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { SeparationComponent } from './components/separation/separation.component';
import { SideToolsComponent } from './components/side-tools/side-tools.component';
import { WhatIDoComponent } from './components/what-ido/what-ido.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { WorkTogetherComponent } from './components/work-together/work-together.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeroComponent,
    SeparationComponent,
    WhatIDoComponent,
    SideToolsComponent,
    HomepageComponent,
    WorkTogetherComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class HomeModule {}
