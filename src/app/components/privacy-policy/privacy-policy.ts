import { Component, inject, OnInit } from '@angular/core';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { TranslatePipe } from "@ngx-translate/core";
import { TranslateServices } from '../../services/translate-service';


@Component({
  selector: 'app-privacy-policy',
  imports: [Header, Footer, TranslatePipe],
  templateUrl: './privacy-policy.html',
  styleUrls: ['./privacy-policy.scss', './privacy-policy-media.scss']
})


export class PrivacyPolicy implements OnInit {
  translateService: TranslateServices = inject(TranslateServices);


  ngOnInit(): void {
    this.translateService.setLanguages();
    this.translateService.loadLanguage();
    this.translateService.useLanguage(this.translateService.activeLanguage);
  }
}
