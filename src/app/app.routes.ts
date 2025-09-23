import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { LegalNotice } from './components/legal-notice/legal-notice';
import { PrivacyPolicy } from './components/privacy-policy/privacy-policy';
import { PageNotFound } from './components/page-not-found/page-not-found';


export const routes: Routes = [
    { path: '', component: Home },
    { path: 'legal-notice', component: LegalNotice },
    { path: 'privacy-policy', component: PrivacyPolicy },
    { path: '**', component: PageNotFound },
];