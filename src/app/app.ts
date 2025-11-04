import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './component/nav-bar/nav-bar';
import { AboutMeComponent } from "./about-me/about-me";
import { SkillToolsComponent } from "./skill-tools/skill-tools";

@Component({
  selector: 'app-root',
  imports: [NavBarComponent, AboutMeComponent, SkillToolsComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-portfolio');

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
