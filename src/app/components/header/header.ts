import { NgClass } from '@angular/common';
import { AfterViewInit, Component, inject, input } from '@angular/core';
import { ScrollSpyService } from '../../services/scroll-spy-service';
import { Router, RouterLink } from '@angular/router';
import { TranslateServices } from '../../services/translate-service';
import { TranslatePipe } from "@ngx-translate/core";


@Component({
  selector: 'app-header',
  imports: [NgClass, RouterLink, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})


export class Header implements AfterViewInit {
  router: Router = inject(Router);
  translateService: TranslateServices = inject(TranslateServices);
  scrollSpyService: ScrollSpyService = inject(ScrollSpyService);
  isOnHomePage = input<boolean>(false);
  navigationItems: { name: string, href: string }[] = [
    { 'name': 'header.whyMe', 'href': 'why-me' },
    { 'name': 'header.skills', 'href': 'my-skills' },
    { 'name': 'header.projects', 'href': 'my-projects' },
    { 'name': 'header.contact', 'href': 'contact-me' },
  ];


  ngAfterViewInit(): void {
    this.scrollSpyService.scrollToActiveSection(25);
  }


  setActiveLink(selectedLink: string): void {
    this.scrollSpyService.scrollToActiveSection(25);
    this.scrollSpyService.activeLink = selectedLink;
  }


  getActiveLinkClass(selectedLink: string): string {
    return this.scrollSpyService.activeLink === selectedLink ? 'active-link' : '';
  }


  handleLogoClick(): void {
    if (!this.isOnHomePage()) {
      this.router.navigateByUrl('/');
    }
  }


  selectLanguage(selectedLanguage: string): void {
    if (this.translateService.activeLanguage !== selectedLanguage) {
      this.translateService.activeLanguage = selectedLanguage;
      this.translateService.saveLanguage(selectedLanguage);
      this.translateService.useLanguage(selectedLanguage);
    }
  }


  getActiveLanguageClass(selectedLanguage: string): string {
    return this.translateService.activeLanguage === selectedLanguage ? 'active-language' : 'inactive-language';
  }
}