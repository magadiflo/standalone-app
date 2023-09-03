import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../../shared/header/header.component';


@Component({
  selector: 'blog-layout-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.scss']
})
export class LayoutPageComponent {

}
