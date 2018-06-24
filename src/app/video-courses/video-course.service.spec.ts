import { TestBed, inject } from '@angular/core/testing';

import { VideoCourseService } from './video-course.service';

describe('VideoCourseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoCourseService]
    });
  });

  it('should be created', inject([VideoCourseService], (service: VideoCourseService) => {
    expect(service).toBeTruthy();
  }));
});
