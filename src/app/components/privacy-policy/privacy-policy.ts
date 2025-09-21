import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";


@Component({
  selector: 'app-privacy-policy',
  imports: [Header, Footer],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss'
})


export class PrivacyPolicy {

}
