import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  TranslatePipe,
  TranslateDirective,
  TranslateService,
} from '@ngx-translate/core';
import { SwitchlanguageService } from '../../../services/switchlanguage.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslatePipe, TranslateDirective],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  menuOpen = false;
  selectedLanguage: string = 'en';

  switchlanguage = inject(SwitchlanguageService);
  constructor(private translate: TranslateService) {
    this.selectedLanguage = this.switchlanguage.german ? 'de' : 'en';
    this.translate.use(this.selectedLanguage);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  setLanguage(language: string) {
    if (this.selectedLanguage !== language) { 
      this.selectedLanguage = language;
      this.translate.use(this.selectedLanguage);
      this.switchlanguage.german = this.selectedLanguage === 'de';
    }
  }
}