import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})


export class Header {
  navigationItems: string[] = ['Why me', 'Skills', 'Projects', 'Contact'];
}