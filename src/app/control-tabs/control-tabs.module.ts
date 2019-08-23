import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlTabsComponent } from './control-tabs.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ControlTabsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ControlTabsComponent
  ]
})
export class ControlTabsModule { }
