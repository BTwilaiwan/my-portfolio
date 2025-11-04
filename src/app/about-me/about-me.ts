import { Component, ViewChild, ElementRef } from '@angular/core';
import { experience, fullname } from '../shared/model/about-me';
import { sharedImports } from '../shared/shared-imports';
// import { SkillToolsComponent } from '../skill-tools/skill-tools';

@Component({
  selector: 'app-about-me',
  imports: [ sharedImports ],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss'
})
export class AboutMeComponent{

  @ViewChild('bottomSection') bottomSection!: ElementRef;
  
  public experience: any = experience;
  public fullname: any = fullname;

  ngOnInit() { }

  onLink(link: string) {
    if(link === 'github') window.open('https://github.com/BTwilaiwan', '_blank');
    else if(link === 'gmail') window.open('https://mail.google.com/mail/?view=cm&fs=1&to=wilaiwan.akh@gmail.com', '_blank');
    else if(link === 'linkedin') window.open('https://www.linkedin.com/in/wilaiwan-akharawong/', '_blank');
    else if(link === 'ig') window.open('https://www.instagram.com/__baitoeyy/', '_blank');
  }

  onDownloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/wilaiwan.akh.pdf';
    link.download = 'Wilaiwan_Akh_Resume.pdf';
    link.target = '_blank';
    link.click();
  }

  scrollToSection() {
    console.log('...')
    this.bottomSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
