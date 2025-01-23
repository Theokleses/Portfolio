import { Component } from '@angular/core';

@Component({
  selector: 'app-my-reference',
  standalone: true,
  imports: [],
  templateUrl: './my-reference.component.html',
  styleUrl: './my-reference.component.scss',
})
export class MyReferenceComponent {
  images: string[] = [
    'assets/img/first-reference.png',
    'assets/img/second-reference.png',
    'assets/img/third-reference.png',
  ];
  numberimages: string[] = [
    'assets/img/firstimg-ref.png',
    'assets/img/secondimg-ref.png',
    'assets/img/thirdimg-ref.png',
  ];

  currentIndex: number = 0;
  currentIndexNumber: number = 0;

  // Pfeil-Bilder
  leftArrowSrc = '/assets/img/arrow-left.png';
  rightArrowSrc = '/assets/img/arrow-right.png';

  // Hover-Bilder
  leftArrowHover = '/assets/img/arrow-left-hover.png';
  rightArrowHover = '/assets/img/arrow-right-hover.png';

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.currentIndexNumber =
      (this.currentIndexNumber + 1) % this.numberimages.length;
  }

  previousImage(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.currentIndexNumber =
      (this.currentIndexNumber - 1 + this.numberimages.length) %
      this.numberimages.length;
  }

  hoverArrow(direction: 'left' | 'right', isHovering: boolean) {
    if (direction === 'left') {
      this.leftArrowSrc = isHovering ? this.leftArrowHover : '/assets/img/arrow-left.png';
    } else if (direction === 'right') {
      this.rightArrowSrc = isHovering ? this.rightArrowHover : '/assets/img/arrow-right.png';
    }
  }
}
