import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollSpyService } from '../../services/scroll-spy-service';
import { TranslatePipe } from "@ngx-translate/core";


@Component({
  selector: 'app-intro',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './intro.html',
  styleUrls: ['./intro.scss', 'intro-media.scss']
})


export class Intro {
  scrollSpyService: ScrollSpyService = inject(ScrollSpyService);
}