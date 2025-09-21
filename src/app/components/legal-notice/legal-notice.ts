import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";


@Component({
  selector: 'app-legal-notice',
  imports: [Header, Footer],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss'
})


export class LegalNotice {

}