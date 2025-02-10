import { Component, inject } from '@angular/core';
import { SwitchlanguageService } from '../../services/switchlanguage.service'; 
import {
  TranslatePipe,
  TranslateDirective,
  TranslateService,
} from '@ngx-translate/core';



@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySKillsComponent {
  
   switchlanguage = inject(SwitchlanguageService);

}
