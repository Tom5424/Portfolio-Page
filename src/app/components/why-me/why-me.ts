import { Component } from '@angular/core';
import { ScrollSpyDirective } from "../../directives/scroll-spy-directive";
import { RouterLink } from '@angular/router';
import { TranslatePipe } from "@ngx-translate/core";
import { USALModule } from '@usal/angular';


@Component({
  selector: 'app-why-me',
  imports: [ScrollSpyDirective, RouterLink, TranslatePipe, USALModule],
  templateUrl: './why-me.html',
  styleUrl: './why-me.scss'
})


export class WhyMe {

}