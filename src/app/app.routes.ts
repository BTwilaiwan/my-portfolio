import { Routes } from '@angular/router';

import { AboutMeComponent } from './about-me/about-me';
import { SkillToolsComponent } from './skill-tools/skill-tools';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'aboutMe' },
    { path: 'aboutMe', component: AboutMeComponent },
    { path: 'skillTool', component: SkillToolsComponent },
];
