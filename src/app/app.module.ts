import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {ContentComponent} from '@app/shared/components/content';
import {ExportPdfComponent} from '@app/shared/components/export-pdf';
import {CoreModule} from '@app/core/core.module';
import {FeaturesModule} from '@app/features/features.module';
import {SkillsModule} from '@app/features/skills/skills.module';
import {ComponentsModule} from '@app/shared/components/components.module';
import {routes} from './routes';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ExportPdfComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    ComponentsModule,
    FeaturesModule,
    SkillsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
