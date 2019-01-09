import {Routes} from '@angular/router';
import {SkillsComponent} from './features/skills/skills.component';
import {AboutComponent} from './features/about/about.component';

export const routes: Routes = [
  {path: '', redirectTo: 'skills', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'skills', component: SkillsComponent},
  // {path: 'experience', loadChildren: 'app/features/experience/experience.module#ProfileModule'},
  // {path: 'education', loadChildren: 'app/features/education/education.module#ProfileModule'},
  {path: '**', redirectTo: 'skills'}
];
