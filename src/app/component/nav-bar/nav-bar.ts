import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-nav-bar',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss'
})
export class NavBarComponent {
  
  constructor(
    private router: Router
  ) {}

  onNavigate(route: any) {
    this.router.navigate([`/${route}`])
  }
}
