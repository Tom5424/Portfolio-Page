import { ViewportScroller } from '@angular/common';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})


export class ScrollSpyService {
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  viewportScroller: ViewportScroller = inject(ViewportScroller);
  activeSection: WritableSignal<string> = signal<string>('');
  sectionOffsets: { [key: string]: number } = { 'why-me': 300, 'my-skills': 100 };
  activeLink: string = '';


  setActiveSection(section: string): void {
    this.activeSection.set(section); 
  }


  clearActiveSection(): void {
    this.activeSection.set('');
  }


  scrollToActiveSection(): void {
    this.activatedRoute.fragment.subscribe(fragment => {
      if (fragment) {
        this.activeLink = fragment;
        const sectionOffset = this.sectionOffsets[fragment];
        this.viewportScroller.setOffset([0, sectionOffset]);
      }
    });
  }
}