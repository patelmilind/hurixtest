import { TestBed } from '@angular/core/testing';

import { ImggalleryService } from './imggallery.service';

describe('ImggalleryService', () => {
  let service: ImggalleryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImggalleryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
