import { NgModule } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { SideToolsComponent } from './components/side-tools/side-tools.component';
import { WhatIDoComponent } from './components/what-ido/what-ido.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { WorkTogetherComponent } from './components/work-together/work-together.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeroComponent,
    WhatIDoComponent,
    SideToolsComponent,
    HomepageComponent,
    WorkTogetherComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class HomeModule {}
