import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../main-content/landing-page/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [RouterLink, NavbarComponent, FooterComponent],
  // template: `<app-navbar></app-navbar>`,
  templateUrl: `./legal-notice.component.html`,
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  leftArrowSrc = '/assets/img/arrow-left.png';
  leftArrowHover = '/assets/img/arrow-left-hover.png';


  hoverArrow(direction: 'back', isHovering: boolean) {
    if (direction === 'back') {
      this.leftArrowSrc = isHovering
        ? this.leftArrowHover
        : '/assets/img/arrow-left.png';
    }
  }

}
