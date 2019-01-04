import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {HeaderComponent} from './header';
import {ContentComponent} from './content';
import {RouterLinkComponent} from './router-link';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    ContentComponent,
    RouterLinkComponent
  ],
  declarations: [
    HeaderComponent,
    ContentComponent,
    RouterLinkComponent
  ]
})
export class ComponentsModule {
}
