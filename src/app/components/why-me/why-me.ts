import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from "@ngx-translate/core";
import { USALModule } from '@usal/angular';


@Component({
  selector: 'app-why-me',
  imports: [RouterLink, TranslatePipe, USALModule],
  templateUrl: './why-me.html',
  styleUrls: ['./why-me.scss', './why-me-media.scss']
})


export class WhyMe {

}