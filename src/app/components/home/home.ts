import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Intro } from '../intro/intro';
import { WhyMe } from '../why-me/why-me';
import { MySkills } from '../my-skills/my-skills';
import { MyProjects } from '../my-projects/my-projects';
import { ContactMe } from '../contact-me/contact-me';
import { Footer } from '../footer/footer';


@Component({
  selector: 'app-home',
  imports: [Header, Intro, WhyMe, MySkills, MyProjects, ContactMe, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})


export class Home {

}