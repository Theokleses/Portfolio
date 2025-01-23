import { Component } from '@angular/core';
import { LandPageComponent } from './landing-page/landingPage.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySKillsComponent } from './my-skills/my-skills.component';
import { MyPortfolioComponent } from './my-portfolio/my-portfolio.component';
import { MyReferenceComponent } from './my-reference/my-reference.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [LandPageComponent, AboutMeComponent, MySKillsComponent, MyPortfolioComponent, MyReferenceComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
