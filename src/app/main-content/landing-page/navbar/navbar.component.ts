import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  TranslatePipe,
  TranslateDirective,
  TranslateService,
} from '@ngx-translate/core';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink,TranslatePipe, TranslateDirective],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  menuOpen = false;

  toggleMenu() {
      this.menuOpen = !this.menuOpen;
  }
  selectedLanguage: string = 'en';

  constructor(private translate: TranslateService) {}

  toggleLanguage(): void {
    this.selectedLanguage = this.selectedLanguage === 'en' ? 'de' : 'en';
    this.translate.use(this.selectedLanguage);
  }

}
