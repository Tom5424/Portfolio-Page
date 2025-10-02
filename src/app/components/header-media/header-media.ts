import { NgClass } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header-media',
  imports: [NgClass],
  templateUrl: './header-media.html',
  styleUrl: './header-media.scss'
})


export class HeaderMedia {
  router: Router = inject(Router);
  isOnHomePage = input<boolean>(false);
  menuIsOpen: boolean = false;


  toggleMenu(): void {
    this.menuIsOpen = !this.menuIsOpen;
  }


  handleLogoClick(): void {
    if (!this.isOnHomePage()) {
      this.router.navigateByUrl('/');
    }
  }
}