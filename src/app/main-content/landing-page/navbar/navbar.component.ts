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
  imports: [CommonModule, RouterLink,TranslatePipe, TranslateDirective,],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  menuOpen = false;

  toggleMenu() {
      this.menuOpen = !this.menuOpen;
  }
  selectedLanguage: string = 'en';

  switchlanguage = inject(SwitchlanguageService);
  constructor(private translate: TranslateService) {}

  toggleLanguage(): void {
    this.selectedLanguage = this.selectedLanguage === 'en' ? 'de' : 'en';
    this.translate.use(this.selectedLanguage);
    if (this.selectedLanguage == 'en') {
        this.switchlanguage.german = false; 
      
    }else {
      this.switchlanguage.german = true;
    }
  }

}
