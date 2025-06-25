import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SwitchlanguageService } from '../../services/switchlanguage.service';
import {
  TranslatePipe,
  TranslateDirective,
  TranslateService,
} from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-contact',
  standalone: true,
  imports: [FormsModule, TranslatePipe, TranslateDirective, RouterLink, CommonModule],
  templateUrl: './my-contact.component.html',
  styleUrl: './my-contact.component.scss',
})
export class MyContactComponent {
  switchlanguage = inject(SwitchlanguageService);
  http = inject(HttpClient);
  upArrowSrc = '/assets/img/arrow-up.png';
  upArrowHover = '/assets/img/arrow-up-hover.png';

  clickBoxSrc = './assets/img/click-box.png';
  clickedBoxSrc = './assets/img/clicked-box.png';
  
  isBoxClicked: boolean = false;
  sendMessage: boolean = false;
  mailTest = true;

  contactData = {
    name: '',
    email: '',
    message: '',
  };


  post = {
    endPoint: 'https://osahonschmolze.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'text' as const,
    },
  };
  
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && this.isBoxClicked) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.sendMessage = true;
            setTimeout(() => {
              this.sendMessage = false;
            }, 5000);
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => {
            console.info('send post complete');
            this.isBoxClicked = false;
          },
        });
    }
  }

  hoverArrow(direction: 'up', isHovering: boolean) {
    if (direction === 'up') {
      this.upArrowSrc = isHovering
        ? this.upArrowHover
        : '/assets/img/arrow-up.png';
    }
  }
  
  scrollToTop(){
    window.scrollTo({top: 0,  behavior: "auto"})
  }

  navigateTo(sectionId: string) {
    let element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  }
}
