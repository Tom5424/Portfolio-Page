import { inject, Injectable } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import translationsDE from '../../../public/i18n/de.json';
import translationsEN from '../../../public/i18n/en.json';


@Injectable({
  providedIn: 'root'
})


export class TranslateServices {
  translateService: TranslateService = inject(TranslateService);
  activeLanguage: string = 'en';


  setLanguages(): void {
    this.translateService.addLangs(['de', 'en']);
    this.translateService.setFallbackLang('en');
    this.setTranslations();
    this.setDefaultLanguage();
  }


  setTranslations(): void {
    this.translateService.setTranslation('de', translationsDE);
    this.translateService.setTranslation('en', translationsEN);
  }


  setDefaultLanguage(): void {
    this.translateService.use(this.activeLanguage);
  }


  useSelectedLanguage(selectedLanguage: string): void {
    this.translateService.use(selectedLanguage);
  }
}