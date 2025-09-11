import { NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ScrollSpyService } from '../../services/scroll-spy-service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [NgClass, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})


export class Header implements OnInit {
  scrollSpyService = inject(ScrollSpyService);
  navigationItems: { name: string, href: string }[] = [
    { 'name': 'Why me', 'href': 'why-me' },
    { 'name': 'Skills', 'href': 'my-skills' },
    { 'name': 'Projects', 'href': 'my-projects' },
    { 'name': 'Contact', 'href': '' },
  ];


  ngOnInit(): void {
    this.scrollSpyService.scrollToActiveSection();
  }


  setActiveLink(selectedLink: string): void {
    this.scrollSpyService.scrollToActiveSection();
    this.scrollSpyService.activeLink = selectedLink;
  }


  getActiveLinkClass(selectedLink: string): string {
    return this.scrollSpyService.activeLink === selectedLink ? 'active-link' : '';
  }
}