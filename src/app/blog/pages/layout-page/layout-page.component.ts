import { Component } from '@angular/core';

import { HeaderComponent } from '../../shared/header/header.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'blog-layout-page',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.scss']
})
export class LayoutPageComponent {

}
