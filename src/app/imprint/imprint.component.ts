import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  TranslatePipe,
  TranslateDirective,
  TranslateService,
} from '@ngx-translate/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [RouterLink,TranslatePipe, TranslateDirective],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

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
