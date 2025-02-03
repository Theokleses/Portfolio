import { Component, HostListener } from '@angular/core';
import {
  TranslatePipe,
  TranslateDirective,
  TranslateService,
} from '@ngx-translate/core';

@Component({
  selector: 'app-my-reference',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './my-reference.component.html',
  styleUrl: './my-reference.component.scss',
})
export class MyReferenceComponent {
  references = [
    {
      image: 'assets/img/first-reference.png',
      mobileImage:  'assets/img/first-reference-mobile.png',
      numberImage: 'assets/img/firstimg-ref.png',
    },
    {
      image: 'assets/img/second-reference.png',
      mobileImage:  'assets/img/second-reference-mobile.png',
      numberImage: 'assets/img/secondimg-ref.png',
    },
    {
      image: 'assets/img/third-reference.png',
      mobileImage:  'assets/img/third-reference-mobile.png',
      numberImage: 'assets/img/thirdimg-ref.png',
    },
  ];

  currentIndex = 0;
  isMobileView: boolean = window.innerWidth < 1100;

  leftArrowSrc = '/assets/img/arrow-left.png';
  rightArrowSrc = '/assets/img/arrow-right.png';

  leftArrowHover = '/assets/img/arrow-left-hover.png';
  rightArrowHover = '/assets/img/arrow-right-hover.png';

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.references.length;
  }

  previousImage(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.references.length) % this.references.length;
  }

  hoverArrow(direction: 'left' | 'right', isHovering: boolean) {
    if (direction === 'left') {
      this.leftArrowSrc = isHovering ? this.leftArrowHover : '/assets/img/arrow-left.png';
    } else if (direction === 'right') {
      this.rightArrowSrc = isHovering ? this.rightArrowHover : '/assets/img/arrow-right.png';
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: any) {
    this.isMobileView = window.innerWidth < 1100;
  }

  getCurrentImage(): string {
    return this.isMobileView ? this.references[this.currentIndex].mobileImage : this.references[this.currentIndex].image;
  }


}



