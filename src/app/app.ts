import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './component/nav-bar/nav-bar';
import { AboutMeComponent } from "./about-me/about-me";
import { SkillToolsComponent } from "./skill-tools/skill-tools";
import { Project } from "./project/project";
import { Experience } from "./experience/experience";
import { Contact } from "./contact/contact";

@Component({
  selector: 'app-root',
  imports: [NavBarComponent, AboutMeComponent, SkillToolsComponent, Project, Experience, Contact],
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
