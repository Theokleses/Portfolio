import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SwitchlanguageService {
  private readonly LANGUAGE_KEY = 'selectedLanguage';
  
  constructor() {
    if (!localStorage.getItem(this.LANGUAGE_KEY)) {
      localStorage.setItem(this.LANGUAGE_KEY, 'en');
    }
  }

  get german(): boolean {
    return localStorage.getItem(this.LANGUAGE_KEY) === 'de';
  }

  set german(value: boolean) {
    localStorage.setItem(this.LANGUAGE_KEY, value ? 'de' : 'en');
  }
}