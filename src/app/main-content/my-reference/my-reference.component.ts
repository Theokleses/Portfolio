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
// export class MyReferenceComponent {
//   references = [
//     {
//       image: 'assets/img/first-reference.png',
//       mobileImage:  'assets/img/first-reference-mobile.png',
//       numberImage: 'assets/img/firstimg-ref.png',
//     },
//     {
//       image: 'assets/img/second-reference.png',
//       mobileImage:  'assets/img/second-reference-mobile.png',
//       numberImage: 'assets/img/secondimg-ref.png',
//     },
//     {
//       image: 'assets/img/third-reference.png',
//       mobileImage:  'assets/img/third-reference-mobile.png',
//       numberImage: 'assets/img/thirdimg-ref.png',
//     },
//   ];

//   currentIndex = 0;
//   isMobileView: boolean = window.innerWidth < 1100;

//   leftArrowSrc = '/assets/img/arrow-left.png';
//   rightArrowSrc = '/assets/img/arrow-right.png';

//   leftArrowHover = '/assets/img/arrow-left-hover.png';
//   rightArrowHover = '/assets/img/arrow-right-hover.png';

//   nextImage(): void {
//     this.currentIndex = (this.currentIndex + 1) % this.references.length;
//   }

//   previousImage(): void {
//     this.currentIndex =
//       (this.currentIndex - 1 + this.references.length) % this.references.length;
//   }

//   hoverArrow(direction: 'left' | 'right', isHovering: boolean) {
//     if (direction === 'left') {
//       this.leftArrowSrc = isHovering ? this.leftArrowHover : '/assets/img/arrow-left.png';
//     } else if (direction === 'right') {
//       this.rightArrowSrc = isHovering ? this.rightArrowHover : '/assets/img/arrow-right.png';
//     }
//   }

//   @HostListener('window:resize', ['$event'])
//   onResize(event?: any) {
//     this.isMobileView = window.innerWidth < 1100;
//   }

//   getCurrentImage(): string {
//     return this.isMobileView ? this.references[this.currentIndex].mobileImage : this.references[this.currentIndex].image;
//   }
// }
export class MyReferenceComponent {
  // references = [
  //   {
  //     text: "It was a great pleasure to work with Osa in our group at DA. With his friendly and reliable nature, he played a key role in helping our team grow together quickly and successfully achieve our shared goals. Moreover, he always approached our challenges with confidence and great dedication – a crucial factor for our team's morale and success!",
  //     author: 'H. Bischoping - Team Partner',
  //     placeholder: 'Hendrik',
  //   },
  //   {
  //     text: 'Osahon is an incredibly hardworking and dedicated team partner. His willingness to learn and commitment are impressive, and he was always helpful. He not only brings technical expertise but also a fantastic team mentality!',
  //     author: 'M. Steffen - Team Partner',
  //     placeholder: 'Marcel',
  //   },
  //   {
  //     text: 'Osa impresses with his quick grasp of new concepts and his enthusiasm. He adapts to new technologies and ideas remarkably fast, showing a true passion for what he does. Working with him is simply enjoyable because he is not only highly motivated but also inspires others with his positive energy. His eagerness to learn and openness make him a valuable team member who continuously grows and develops.',
  //     author: 'S. Töpfer - Senior Developer',
  //     placeholder: 'Sascha',
  //   },
  //   {
  //     text: 'Working with Osa Schmolze was very pleasant, as he always acted reliably and competently. His contribution significantly advanced the software project.',
  //     author: 'S. Demir - Team Partner',
  //     placeholder: 'Sinan',
  //   },
  //   {
  //     text: 'A hardworking and inquisitive person who always gives a hand to his colleagues.',
  //     author: 'M. Ivanova - Team Partner',
  //     placeholder: 'Mariia',
  //   },
  // ];

  references = [
    {
      key: 'hendrik',
      placeholder: 'Hendrik'
    },
    {
      key: 'marcel',
      placeholder: 'Marcel'
    },
    {
      key: 'sascha',
      placeholder: 'Sascha'
    },
    {
      key: 'sinan',
      placeholder: 'Sinan'
    },
    {
      key: 'mariia',
      placeholder: 'Mariia'
    }
  ];

  currentIndex = 0;

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

  getCurrentReference() {
    return this.references[this.currentIndex];
  }

}



