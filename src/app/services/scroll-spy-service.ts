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
  activeLink: string = '';


  setActiveSection(section: string): void {
    this.activeSection.set(section);
  }


  clearActiveSection(): void {
    this.activeSection.set('');
  }


  scrollToActiveSection(header: HTMLElement | undefined, additionallyOffset: number): void {
    this.activatedRoute.fragment.subscribe(fragment => {
      if (fragment && header) {
        Promise.resolve().then(() => this.activeLink = fragment);
        const offsetY = header.offsetHeight - additionallyOffset;
        this.viewportScroller.setOffset([0, offsetY]);
        this.viewportScroller.scrollToAnchor(fragment);
      }
    });
  }
}