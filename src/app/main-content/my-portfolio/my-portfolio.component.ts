import { Component } from '@angular/core';
import {
  TranslatePipe,
  TranslateDirective,
  TranslateService,
} from '@ngx-translate/core';


@Component({
  selector: 'app-my-portfolio',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './my-portfolio.component.html',
  styleUrl: './my-portfolio.component.scss'
})
export class MyPortfolioComponent {

}
