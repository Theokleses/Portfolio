import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";

@Component({
  selector: 'app-landing-Page',
  standalone: true,
  imports: [CommonModule, NavbarComponent,TranslatePipe, TranslateDirective],
  template: `
    <section class="contentmax">
      <div class="first-sektion">
        <div class="img-container">
          <img class="landingpage-img" src="./assets/img/file.png" />
        </div>
        <div class="text-container">
          <div class="job-name">
            <span class="Iam">I am</span>
            <p class="main-name">Osahon Schmolze</p>
            <p class="job">FRONTEND DEVELOPER</p>
          </div>
          <div class="center-button">
            <a href="#my-contact">
              <button class="button">Lets's talk!</button>
            </a>
          </div>
        </div>
      </div>

      <div class="first-kontakt">
        <div class="left-sektion">
          <hr class="styled-line" />
          <a class="icons" href=""><img src="./assets/img/github.png" /></a>
          <a class="icons" href=""><img src="./assets/img/mail.png" /></a>
          <a class="icons" href=""><img src="./assets/img/linked.png" /></a>
          <p>osahonschmolze222&#64;gmail.com</p>
        </div>
        <div class="scroll-down">
          <img class="arrow" src="./assets/img/scroll-down.png" />
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./landingPage.component.scss'],
})
export class LandPageComponent {}
