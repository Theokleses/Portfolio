import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";
import { SwitchlanguageService } from '../../services/switchlanguage.service';

@Component({
  selector: 'app-landing-Page',
  standalone: true,
  imports: [CommonModule, NavbarComponent,TranslatePipe, TranslateDirective],
  template: `
    <section>
      <div class="first-sektion">
        <div class="img-container">
          <img class="landingpage-img" src="./assets/img/landingpage-img.png"  />
          <img src="./assets/img/shadow.png" alt="Shadow-image">
        </div>
        <div class="text-container">
          <div class="job-name">
          @if(this.switchlanguage.german){
            <p class="Iam-ge">Ich bin</p>
          }@else {
            <p class="Iam">I am</p>
          }
            <p class="main-name">Osahon Schmolze</p>
            @if(this.switchlanguage.german){
            <p class="job-ge">FRONTEND ENTWICKLER</p>
          }@else {
            <p class="job">FRONTEND DEVELOPER</p>
          }
          </div>
          <div class="center-button">
            <a href="#my-contact">
              <button class="button">{{ 'landing-page.button' | translate }}</button>
            </a>
          </div>
        </div>
      </div>

      <div class="first-kontakt">
        <div class="left-sektion">
          <hr class="styled-line" />
          <a class="icons" href="https://github.com/Theokleses" target="_blank" rel="noopener noreferrer"><img src="./assets/img/github.png" /></a>
          <a class="icons" href="mailto:osahonschmolze222@gmail.com" target="_blank" rel="noopener noreferrer"><img src="./assets/img/mail.png" /></a>
          <a class="icons" href="https://www.linkedin.com/in/osahon-schmolze-0b51181a2/" target="_blank" rel="noopener noreferrer"><img src="./assets/img/linked.png" /></a>
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
export class LandPageComponent {
   switchlanguage = inject(SwitchlanguageService);
}
