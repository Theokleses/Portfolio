import { Component } from '@angular/core';

@Component({
  selector: 'app-my-contact',
  standalone: true,
  imports: [],
  templateUrl: './my-contact.component.html',
  styleUrl: './my-contact.component.scss'
})
export class MyContactComponent {

  upArrowSrc = '/assets/img/arrow-up.png';
  upArrowHover = '/assets/img/arrow-up-hover.png';

 
  hoverArrow(direction: 'up', isHovering: boolean) {
    if (direction === 'up') {
      this.upArrowSrc = isHovering ? this.upArrowHover : '/assets/img/arrow-up.png';
    } 
  }

}
