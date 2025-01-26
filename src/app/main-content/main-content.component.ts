import { Component } from '@angular/core';
import { LandPageComponent } from './landing-page/landingPage.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySKillsComponent } from './my-skills/my-skills.component';
import { MyPortfolioComponent } from './my-portfolio/my-portfolio.component';
import { MyReferenceComponent } from './my-reference/my-reference.component';
import { MyContactComponent } from './my-contact/my-contact.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [RouterLink,LandPageComponent, AboutMeComponent, MySKillsComponent, MyPortfolioComponent, MyReferenceComponent, MyContactComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
