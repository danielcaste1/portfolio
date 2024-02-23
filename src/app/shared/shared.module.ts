import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeparationComponent } from './separation/separation.component';

@NgModule({
  declarations: [SeparationComponent],
  exports: [SeparationComponent],
  imports: [CommonModule],
})
export class SharedModule {}
