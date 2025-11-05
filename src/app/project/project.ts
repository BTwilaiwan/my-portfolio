import { Component } from '@angular/core';
import { sharedImports } from '../shared/shared-imports';
import { CardModule } from 'primeng/card';
@Component({
  selector: 'app-project',
  imports: [sharedImports, CardModule],
  templateUrl: './project.html',
  styleUrl: './project.scss'
})
export class Project {

}
