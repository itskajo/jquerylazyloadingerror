import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ControlTabsModule } from '../control-tabs/control-tabs.module';
import { LazyComponentComponent } from './lazy-component/lazy-component.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '', component: LazyComponentComponent
}];

@NgModule({
  declarations: [LazyComponentComponent],
  imports: [
    CommonModule,
    SharedModule,
    ControlTabsModule,
    RouterModule.forChild(routes)
  ]
})
export class LazyModuleModule { }
