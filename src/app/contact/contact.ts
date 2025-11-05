import { Component } from '@angular/core';
import { sharedImports } from '../shared/shared-imports';
import { education } from '../shared/model/education'

@Component({
  selector: 'app-contact',
  imports: [sharedImports],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  public education: any = education;


  onLink(link: string) {
    if(link === 'github') window.open('https://github.com/BTwilaiwan', '_blank');
    else if(link === 'gmail') window.open('https://mail.google.com/mail/?view=cm&fs=1&to=wilaiwan.akh@gmail.com', '_blank');
    else if(link === 'linkedin') window.open('https://www.linkedin.com/in/wilaiwan-akharawong/', '_blank');
    else if(link === 'ig') window.open('https://www.instagram.com/__baitoeyy/', '_blank');
  }

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
