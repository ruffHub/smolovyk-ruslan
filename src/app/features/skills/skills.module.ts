import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ComponentsModule} from '@app/shared/components/components.module';
import {SkillsComponent} from './skills.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    SkillsComponent
  ],
  declarations: [SkillsComponent]
})
export class SkillsModule {
}
