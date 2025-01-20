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
    </section>
    `,
    styleUrls:['./landingPage.component.scss']
})

export class LandPageComponent {}