import { Component } from '@angular/core';
import {
  TranslatePipe,
  TranslateDirective,
  TranslateService,
} from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  name = 'Andreas';

  // constructor(private translate: TranslateService) {}
  // changeLangue(language: string) {
  //   this.translate.use(language);
  // }

}
