import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';


@Component({
    selector: 'app-landing-Page',
    standalone: true,
    imports: [CommonModule,NavbarComponent,],
    template:`
    <section>
    <app-navbar></app-navbar>
    <div class="first-sektion">
    <img src="./assets/img/file.png">
    <div class="text-container">
    <div class="name-job">
    <span class="Iam">I am</span>
    <p class="name">Osahon Schmolze</p>
    <p class="job">FRONTEND DEVELOPER</p>
    </div> 
    <div class="center-button">
    <button class="button">Lets's talk!</button>
    </div> 
  </div>
  </div>
  <div class="first-kontakt">
  <div class="left-sektion">  
  <hr class="styled-line">
  <a class="icons" href=""><img src="./assets/img/github.png"></a>
  <a class="icons" href=""><img src="./assets/img/mail.png"></a>
  <a class="icons" href=""><img src="./assets/img/linked.png"></a>
  <p>osahonschmolze222&#64;gmail.com</p>
</div>
  <div class="scroll-down">
  <span>Scroll down</span>
  <img class="arrow" src="./assets/img/arrow.png">
  </div>
  </div>  
    </section>
    `,
    styleUrls:['./landingPage.component.scss']
})

export class LandPageComponent {}