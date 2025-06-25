import { Component, AfterViewInit, HostListener } from '@angular/core';
import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';
import AOS from 'aos';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent implements AfterViewInit {
  private readonly DEVICE_PROFILES = [
    {
      name: 'zenbook',
      query: '(width: 853px) and (height: 1280px) and (orientation: portrait)',
      offsets: {
        titleContainer: 500,
        mainContainer: 300,
        default: 0,
      },
    },
    {
      name: 'ipad-mini',
      query: '(width: 768px) and (height: 1024px) and (orientation: portrait)',
      offsets: {
        titleContainer: 400,
        mainContainer: 250,
        default: 0,
      },
    },
    {
      name: 'ipad-air',
      query: '(width: 820px) and (height: 1180px) and (orientation: portrait)',
      offsets: {
        titleContainer: 450,
        mainContainer: 280,
        default: 0,
      },
    },
    {
      name: 'ipad-pro',
      query:
        '(width: 1024px) and (height: 1366px) and (orientation: portrait), (width: 1366px) and (height: 1024px) and (orientation: landscape)',
      offsets: {
        titleContainer: 500,
        mainContainer: 350,
        default: 0,
      },
    },
    {
      name: 'surface-pro',
      query: '(width: 912px) and (height: 1368px) and (orientation: portrait)',
      offsets: {
        titleContainer: 500,
        mainContainer: 350,
        default: 0,
      },
    },
  ];

  ngAfterViewInit() {
    this.adjustAosForDevices();
    AOS.refresh();
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.adjustAosForDevices();
    AOS.refresh();
  }

  private adjustAosForDevices() {
    let aboutMeSection = document.getElementById('about-me');
    if (!aboutMeSection) return;

    const aosElements = aboutMeSection.querySelectorAll('[data-aos]');
    const activeProfile = this.DEVICE_PROFILES.find(
      (profile) => window.matchMedia(profile.query).matches
    );

    aosElements.forEach((el) => {
      if (activeProfile) {
        let offset;
        if (el.classList.contains('aboutme-container')) {
          offset = activeProfile.offsets.titleContainer;
        } else if (el.classList.contains('aboutme-main')) {
          offset = activeProfile.offsets.mainContainer;
        } else {
          offset = activeProfile.offsets.default;
        }
        el.setAttribute('data-aos-offset', offset.toString());
      } else {
        el.setAttribute('data-aos-offset', '0');
      }
    });
  }
}
