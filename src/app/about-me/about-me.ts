import { Component } from '@angular/core';
import aboutMe from '../shared/model/about-me/about-me.json';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss'
})
export class AboutMeComponent {

  public objAboutMe: any = aboutMe;
}
