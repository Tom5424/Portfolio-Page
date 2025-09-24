import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollSpyService } from '../../services/scroll-spy-service';


@Component({
  selector: 'app-intro',
  imports: [RouterLink],
  templateUrl: './intro.html',
  styleUrl: './intro.scss'
})


export class Intro {
  scrollSpyService: ScrollSpyService = inject(ScrollSpyService);
}