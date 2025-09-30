import { ViewportScroller } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})


export class ScrollSpyService {
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  viewportScroller: ViewportScroller = inject(ViewportScroller);
  activeLink: string = '';
  headerHeight: number = 107;


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