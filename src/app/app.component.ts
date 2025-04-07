import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './main-content/landing-page/navbar/navbar.component';
import AOS from 'aos';
import {
  TranslateService,
  TranslatePipe,
  TranslateDirective
} from "@ngx-translate/core";
import { ImprintComponent } from "./imprint/imprint.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MainContentComponent, FooterComponent, NavbarComponent, TranslateDirective, ImprintComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit{
  title = 'portfolio';
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
}
// ngOnInit() {
//   AOS.init({
//     duration: 1000, 
//     once: false,    
//     offset: 100,
//     // disable: true    
//   });
//   setTimeout(() => {
//     AOS.refresh();
//   }, 100); 
// }
ngAfterViewInit() {  
  AOS.init({
    duration: 1000,
    once: false,
    offset: 100,
    // disable: window.innerWidth < 768  // Auf Mobile deaktivieren
  });
  setTimeout(() => AOS.refresh(), 500);
}
}
