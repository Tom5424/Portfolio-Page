import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Intro } from './components/intro/intro';
import { WhyMe } from './components/why-me/why-me';
import { MySkills } from './components/my-skills/my-skills';
import { MyProjects } from './components/my-projects/my-projects';
import { ContactMe } from './components/contact-me/contact-me';


@Component({
  selector: 'app-root',
  imports: [Header, Intro, WhyMe, MySkills, MyProjects, ContactMe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})


export class App {


}