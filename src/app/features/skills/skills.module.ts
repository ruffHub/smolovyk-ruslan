import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {SkillsComponent} from './skills.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: SkillsComponent
      }
    ])
  ],
  exports: [
    SkillsComponent
  ],
  declarations: [SkillsComponent]
})
export class SkillsModule {
}
