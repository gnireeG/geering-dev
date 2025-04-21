import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-frontend-layout',
  imports: [NavBarComponent, RouterOutlet],
  templateUrl: './frontend-layout.component.html',
  styleUrl: './frontend-layout.component.scss'
})
export class FrontendLayoutComponent {

}
