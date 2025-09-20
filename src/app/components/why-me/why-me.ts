import { Component } from '@angular/core';
import { ScrollSpyDirective } from "../../directives/scroll-spy-directive";
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-why-me',
  imports: [ScrollSpyDirective, RouterLink],
  templateUrl: './why-me.html',
  styleUrl: './why-me.scss'
})


export class WhyMe {

}