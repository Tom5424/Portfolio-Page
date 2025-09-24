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
  headerHeight: number = 107;


  setActiveSection(section: string): void {
    this.activeSection.set(section);
  }


  clearActiveSection(): void {
    this.activeSection.set('');
  }


  scrollToActiveSection(additionallyOffset: number): void {
    this.activatedRoute.fragment.subscribe(fragment => {
      if (fragment) {
        Promise.resolve().then(() => this.activeLink = fragment); // Prevent the ExpressionChangedAfterItHasBeenCheckedError
        const offsetY = this.headerHeight - additionallyOffset;
        this.viewportScroller.setOffset([0, offsetY]);
        this.viewportScroller.scrollToAnchor(fragment);
      }
    });
  }
}