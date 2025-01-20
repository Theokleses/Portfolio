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
    <img src="./assets/img/file.png">

    </section>
    `,
    styleUrls:['./landingPage.component.scss']
})

export class LandPageComponent {}