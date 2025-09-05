import { EventEmitter, Injectable, Output, signal, WritableSignal } from '@angular/core';


@Injectable({
  providedIn: 'root'
})


export class ScrollSpyService {
  activeSection: WritableSignal<string> = signal<string>('');


  setActiveSection(section: string): void {
    this.activeSection.set(section); 
  }


  clearActiveSection(): void {
    this.activeSection.set('');
  }
}