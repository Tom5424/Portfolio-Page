import { Component, inject, OnInit } from '@angular/core';
import { Footer } from '../footer/footer';
import { Header } from "../header/header";
import { TranslatePipe } from "@ngx-translate/core";
import { TranslateServices } from '../../services/translate-service';


@Component({
  selector: 'app-page-not-found',
  imports: [Header, Footer, TranslatePipe],
  templateUrl: './page-not-found.html',
  styleUrl: './page-not-found.scss'
})


export class PageNotFound implements OnInit {
  translateService: TranslateServices = inject(TranslateServices);


  ngOnInit(): void {
    this.translateService.setLanguages();
    this.translateService.loadLanguage();
    this.translateService.useLanguage(this.translateService.activeLanguage);
  }
}