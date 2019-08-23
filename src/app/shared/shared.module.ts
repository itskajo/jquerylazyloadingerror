import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule, MatButtonModule, MatTooltipModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MatTabsModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule
  ]
})
export class SharedModule { }
