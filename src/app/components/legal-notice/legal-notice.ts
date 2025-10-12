import { Component, inject, OnInit } from '@angular/core';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { TranslatePipe } from "@ngx-translate/core";
import { TranslateServices } from '../../services/translate-service';


@Component({
  selector: 'app-legal-notice',
  imports: [Header, Footer, TranslatePipe],
  templateUrl: './legal-notice.html',
  styleUrls: ['./legal-notice.scss', './legal-notice-media.scss']
})


export class LegalNotice implements OnInit {
  translateService: TranslateServices = inject(TranslateServices);


  ngOnInit(): void {
    this.translateService.setLanguages();
    this.translateService.loadLanguage();
    this.translateService.useLanguage(this.translateService.activeLanguage);
  }
}