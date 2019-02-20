import { TestBed } from '@angular/core/testing';

import { NgxTutorialOverlayService } from './ngx-tutorial-overlay.service';

describe('NgxTutorialOverlayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxTutorialOverlayService = TestBed.get(NgxTutorialOverlayService);
    expect(service).toBeTruthy();
  });
});
