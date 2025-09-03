import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  imports: [],
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
}