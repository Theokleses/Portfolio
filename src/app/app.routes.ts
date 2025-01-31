import { Routes } from '@angular/router';

import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MainContentComponent } from './main-content/main-content.component';


export const routes: Routes = [
   
    {path: 'imprint', component: ImprintComponent},
    {path: 'legal-notice', component: LegalNoticeComponent},
    {path: '', component: MainContentComponent},
    
];
