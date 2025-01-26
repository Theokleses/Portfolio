import { Component } from '@angular/core';

@Component({
  selector: 'app-my-reference',
  standalone: true,
  imports: [],
  templateUrl: './my-reference.component.html',
  styleUrl: './my-reference.component.scss',
})
export class MyReferenceComponent {
  references = [
    {
      image: 'assets/img/first-reference.png',
      numberImage: 'assets/img/firstimg-ref.png',
    },
    {
      image: 'assets/img/second-reference.png',
      numberImage: 'assets/img/secondimg-ref.png',
    },
    {
      image: 'assets/img/third-reference.png',
      numberImage: 'assets/img/thirdimg-ref.png',
    },
  ];


  currentIndex: number = 0;

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


}



