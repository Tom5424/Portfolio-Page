import { Component, inject, OnInit } from '@angular/core';
import { Header } from '../header/header';
import { Intro } from '../intro/intro';
import { WhyMe } from '../why-me/why-me';
import { MySkills } from '../my-skills/my-skills';
import { MyProjects } from '../my-projects/my-projects';
import { ContactMe } from '../contact-me/contact-me';
import { Footer } from '../footer/footer';
import { TranslateServices } from '../../services/translate-service';
import { HeaderMedia } from '../header-media/header-media';


@Component({
  selector: 'app-home',
  imports: [Header, Intro, WhyMe, MySkills, MyProjects, ContactMe, Footer, HeaderMedia],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  host: {
    '(window:resize)': 'isOnMobileView($event)'
  },
})


export class Home implements OnInit {
  translateService: TranslateServices = inject(TranslateServices);


  ngOnInit(): void {
    this.isOnMobileView();
    this.translateService.setLanguages();
    this.translateService.loadLanguage();
    this.translateService.useLanguage(this.translateService.activeLanguage);
  }


  isOnMobileView(event?: UIEvent): boolean {
    const width = (event?.target as Window)?.innerWidth ?? window.innerWidth;
    return width <= 980;
  }
}