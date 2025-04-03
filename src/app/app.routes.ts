import { Routes } from '@angular/router';

import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintLayoutComponent } from './imprint-layout/imprint-layout.component';


// export const routes: Routes = [
//     {path: 'imprint', component: ImprintComponent},
//     {path: 'legal-notice', component: LegalNoticeComponent},
//     {path: '', component: MainContentComponent},
//     {path: 'imprint', component: ImprintLayoutComponent},
// ];

export const routes: Routes = [
    { 
      path: 'imprint', component: ImprintLayoutComponent,
      children: [
        { path: '', component: ImprintComponent } 
      ]
    },
    { path: 'legal-notice', component: LegalNoticeComponent},
    { path: '', component: MainContentComponent }
  ];