import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-my-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './my-contact.component.html',
  styleUrl: './my-contact.component.scss',
})
export class MyContactComponent {
  isBoxClicked: boolean = false;

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  upArrowSrc = '/assets/img/arrow-up.png';
  upArrowHover = '/assets/img/arrow-up-hover.png';

  clickBoxSrc = './assets/img/click-box.png';
  clickedBoxSrc = './assets/img/clicked-box.png';

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
      console.log(this.contactData);
    }
  }

  hoverArrow(direction: 'up', isHovering: boolean) {
    if (direction === 'up') {
      this.upArrowSrc = isHovering
        ? this.upArrowHover
        : '/assets/img/arrow-up.png';
    }
  }

  clickBox() {
    this.isBoxClicked = !this.isBoxClicked;
    this.clickBoxSrc = this.isBoxClicked
      ? this.clickedBoxSrc
      : './assets/img/click-box.png';
  }

}
