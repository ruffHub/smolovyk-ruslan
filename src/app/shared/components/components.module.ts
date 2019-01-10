import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {HeaderComponent} from './header';
import {RouterLinkComponent} from './router-link';
import {SkillsListComponent} from './skills-list';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    RouterLinkComponent,
    SkillsListComponent
  ],
  declarations: [
    HeaderComponent,
    RouterLinkComponent,
    SkillsListComponent
  ]
})
export class ComponentsModule {
}
