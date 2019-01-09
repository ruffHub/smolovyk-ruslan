import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {HeaderComponent} from './header';
import {ContentComponent} from './content';
import {RouterLinkComponent} from './router-link';
import {ExportPdfComponent} from './export-pdf';
import {SkillsModule} from '@app/features/skills/skills.module';
import {AboutModule} from '@app/features/about/about.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SkillsModule,
    AboutModule
  ],
  exports: [
    HeaderComponent,
    ContentComponent,
    RouterLinkComponent,
    ExportPdfComponent
  ],
  declarations: [
    HeaderComponent,
    ContentComponent,
    RouterLinkComponent,
    ExportPdfComponent
  ]
})
export class ComponentsModule {
}
