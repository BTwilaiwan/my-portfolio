import { Component } from '@angular/core';
import { education } from '../shared/model/education'
@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.scss'
})
export class Education {
  public education: any = education;
}
