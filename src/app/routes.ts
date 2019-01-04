import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'skills', pathMatch: 'full'},
  {path: 'about', loadChildren: 'src/app/features/about/about.module#AboutModule'},
  {path: 'skills', loadChildren: './features/skills/skills.module#SkillsModule'},
  // {path: 'experience', loadChildren: 'app/features/experience/experience.module#ProfileModule'},
  // {path: 'education', loadChildren: 'app/features/education/education.module#ProfileModule'},
  {path: '**', redirectTo: 'skills'}
];
