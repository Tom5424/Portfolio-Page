import { NgClass } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  imports: [NgClass],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})


export class Header {
  navigationItems: { name: string, href: string }[] = [
    { 'name': 'Why me', 'href': '#why-me' },
    { 'name': 'Skills', 'href': '#' },
    { 'name': 'Projects', 'href': '#' },
    { 'name': 'Contact', 'href': '#' },
  ];
  activeLink: string = '';


  setActiveLink(selectedLink: string): void {
    this.activeLink = selectedLink;
  }


  getActiveLinkClass(selectedLink: string): string {
    return this.activeLink === selectedLink ? 'active-link' : '';    
  } 
}