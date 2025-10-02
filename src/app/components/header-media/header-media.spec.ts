import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMedia } from './header-media';

describe('HeaderMedia', () => {
  let component: HeaderMedia;
  let fixture: ComponentFixture<HeaderMedia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderMedia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderMedia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
