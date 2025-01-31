import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-my-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './my-contact.component.html',
  styleUrl: './my-contact.component.scss',
})
export class MyContactComponent {

  http = inject(HttpClient)


  isBoxClicked: boolean = false;


  contactData = {
    name: '',
    email: '',
    message: '',
  };

  
  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  upArrowSrc = '/assets/img/arrow-up.png';
  upArrowHover = '/assets/img/arrow-up-hover.png';

  clickBoxSrc = './assets/img/click-box.png';
  clickedBoxSrc = './assets/img/clicked-box.png';

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }
  
  // onSubmit(ngForm: NgForm) {
  //   if (ngForm.valid && ngForm.submitted) {
  //     console.log(this.contactData);
  //   }
  // }

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
