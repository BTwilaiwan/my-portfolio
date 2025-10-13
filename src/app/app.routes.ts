import { Routes } from '@angular/router';

import { AboutMeComponent } from './about-me/about-me';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'aboutMe' },
    { path: 'aboutMe', component: AboutMeComponent }
];
