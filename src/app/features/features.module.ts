import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SkillsModule} from '@app/features/skills/skills.module';
import {AboutModule} from '@app/features/about/about.module';

@NgModule({
  imports: [
    CommonModule,
    SkillsModule,
    AboutModule
  ],
  exports: [
    SkillsModule,
    AboutModule
  ],
  declarations: []
})
export class FeaturesModule {
}
