import { Directive, ElementRef, inject, OnInit } from '@angular/core';
import { ScrollSpyService } from '../services/scroll-spy-service';


@Directive({
  selector: '[appScrollSpy]'
})


export class ScrollSpyDirective implements OnInit {
  element = inject(ElementRef);
  scrollSpyService = inject(ScrollSpyService);
  intersectionObserver!: IntersectionObserver;


  ngOnInit(): void {
    this.initIntersectionObserver();
  }


  initIntersectionObserver(): void {
    this.intersectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => this.updateSectionVisibility(entry));
    }, { threshold: this.generateThresholdArray() });
    this.intersectionObserver.observe(this.element.nativeElement);
  }


  updateSectionVisibility(entry: IntersectionObserverEntry): void {
    if (entry.intersectionRatio >= 0.95) {
      this.scrollSpyService.setActiveSection(this.element.nativeElement.id);
    } else if (entry.intersectionRatio <= 0) {
      this.scrollSpyService.clearActiveSection();
    }
  }


  generateThresholdArray(): number[] {
    return Array.from({ length: 101 }, (element, i) => i / 100); // ==> Create a range of number from 0 till 1 (0, 0.01, 0.02)
  }
}