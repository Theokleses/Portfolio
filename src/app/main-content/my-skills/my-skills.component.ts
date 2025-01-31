import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySKillsComponent {
  
  iconSrc = '/assets/img/cl2.png';
  iconHover = '/assets/img/cl-hover.png';


  hoverIcon(direction: 'up', isHovering: boolean) {
    if (direction === 'up') {
      this.iconSrc = isHovering
        ? this.iconHover
        : '/assets/img/cl2.png';
    }
  }


}
