import { NgClass } from '@angular/common';
import { Component, inject, WritableSignal } from '@angular/core';
import { ScrollSpyService } from '../../services/scroll-spy-service';


@Component({
  selector: 'app-header',
  imports: [NgClass],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})


export class Header {
  scrollSpyService = inject(ScrollSpyService);
  activeLink: WritableSignal<string> = this.scrollSpyService.activeSection;
  navigationItems: { name: string, href: string }[] = [
    { 'name': 'Why me', 'href': '#why-me' },
    { 'name': 'Skills', 'href': '#' },
    { 'name': 'Projects', 'href': '#' },
    { 'name': 'Contact', 'href': '#' },
  ];


  setActiveLink(selectedLink: string): void {
    this.scrollSpyService.setActiveSection(selectedLink);
  }


  getActiveLinkClass(selectedLink: string): string {
    return this.activeLink() === selectedLink ? 'active-link' : '';
  }
}