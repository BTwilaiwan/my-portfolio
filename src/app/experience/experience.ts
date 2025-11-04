import { Component } from '@angular/core';
import { experience } from '../shared/model/experience';
import { sharedImports } from '../shared/shared-imports';

@Component({
  selector: 'app-experience',
  imports: [sharedImports],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {

  public experience: any[] = experience;
}
