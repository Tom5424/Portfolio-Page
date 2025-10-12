import { AfterViewInit, Component, inject, input, Renderer2 } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslateServices } from '../../services/translate-service';
import { NgClass } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { ScrollSpyService } from '../../services/scroll-spy-service';


@Component({
  selector: 'app-header-media',
  imports: [NgClass, RouterLink, TranslatePipe],
  templateUrl: './header-media.html',
  styleUrl: './header-media.scss'
})


export class HeaderMedia implements AfterViewInit {
  router: Router = inject(Router);
  renderer2: Renderer2 = inject(Renderer2);
  translateService: TranslateServices = inject(TranslateServices);
  scrollSpyService: ScrollSpyService = inject(ScrollSpyService);
  isOnHomePage = input<boolean>(false);
  menuIsOpen: boolean = false;
  navigationItems: { name: string, href: string }[] = [
    { 'name': 'header.whyMe', 'href': 'why-me' },
    { 'name': 'header.skills', 'href': 'my-skills' },
    { 'name': 'header.projects', 'href': 'my-projects' },
    { 'name': 'header.contact', 'href': 'contact-me' },
  ];


  ngAfterViewInit(): void {
    this.scrollSpyService.scrollToActiveSection(25);
  }


  openMenu(): void {
    this.menuIsOpen = true;
    this.renderer2.addClass(document.body, 'no-scroll');
  }


  closeMenu(): void {
    this.menuIsOpen = false;
    this.renderer2.removeClass(document.body, 'no-scroll');
  }


  handleLogoClick(): void {
    if (!this.isOnHomePage()) {
      this.router.navigateByUrl('/');
    }
  }


  setActiveLink(selectedLink: string): void {
    this.scrollSpyService.scrollToActiveSection(25);
    this.scrollSpyService.activeLink = selectedLink;
    this.closeMenu();
  }


  getActiveLinkClass(selectedLink: string): string {
    return this.scrollSpyService.activeLink === selectedLink ? 'active-link' : '';
  }


  selectLanguage(selectedLanguage: string): void {
    if (this.translateService.activeLanguage !== selectedLanguage) {
      this.translateService.activeLanguage = selectedLanguage;
      this.translateService.saveLanguage(selectedLanguage);
      this.translateService.useLanguage(selectedLanguage);
      this.closeMenu();
    }
  }


  getActiveLanguageClass(selectedLanguage: string): string {
    return this.translateService.activeLanguage === selectedLanguage ? 'active-language' : 'inactive-language';
  }
}