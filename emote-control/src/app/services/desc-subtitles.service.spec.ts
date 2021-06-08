import { TestBed } from '@angular/core/testing';

import { DescSubtitlesService } from './desc-subtitles.service';

describe('DescSubtitlesService', () => {
  let service: DescSubtitlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DescSubtitlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
