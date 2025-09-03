import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Intro } from './components/intro/intro';
import { WhyMe } from './components/why-me/why-me';


@Component({
  selector: 'app-root',
  imports: [Header, Intro, WhyMe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})


export class App {


}