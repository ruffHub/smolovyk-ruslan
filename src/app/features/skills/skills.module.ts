import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SkillsComponent} from './skills.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SkillsComponent
  ],
  declarations: [SkillsComponent]
})
export class SkillsModule {
}
