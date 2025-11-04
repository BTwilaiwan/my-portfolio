import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AboutMeComponent } from '../../about-me/about-me';

import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-nav-bar',
  imports: [ MenubarModule, ButtonModule ],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss'
})
export class NavBarComponent {
    @ViewChild('aboutMeComponent') aboutMeComponent!: AboutMeComponent;
    public items: any[] = [];

    constructor(
        private router: Router
    ) {}

    ngOnInit() {}
    
    onNavigate(route: any) {
        this.router.navigate([`/${route}`])
    }
    
    scrollToSection(sectionId: string) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
