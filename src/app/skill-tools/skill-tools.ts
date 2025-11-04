import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';
import { sharedImports } from '../shared/shared-imports';
import { skillTool } from '../shared/model/skill-tools'

@Component({
  selector: 'app-skill-tools',
  templateUrl: './skill-tools.html',
  imports: [ CommonModule, CarouselModule, ...sharedImports ],
  styleUrl: './skill-tools.scss'
})
export class SkillToolsComponent {
  
  public responsiveOptions: any[] | undefined;
  public skillList: any[] = skillTool;
  
  ngOnInit() {}
}
