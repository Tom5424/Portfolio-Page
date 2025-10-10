import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from "@ngx-translate/core";


@Component({
  selector: 'app-footer',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss', './footer-media.scss']
})


export class Footer {

}