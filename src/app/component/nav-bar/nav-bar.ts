import { Component, ViewChild } from '@angular/core';
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

    constructor() {}

    ngOnInit() {}
    
    scrollToSection(sectionId: string) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
