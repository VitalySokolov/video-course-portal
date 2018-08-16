import { TestBed, inject } from '@angular/core/testing';

import { VideoCourseService } from './video-course.service';
import { VideoCourseItem } from './video-course-item.model';

describe('VideoCourseService', () => {
  const testCourseId = 6;
  const testCourseTitle = 'Course Title';

  const courseItem: VideoCourseItem = {
    id: 0,
    title: testCourseTitle,
    description: 'Description',
    date: new Date(),
    duration: 123,
    authors: [],
    isTopRated: true
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoCourseService]
    });
  });

  it('should be created', inject([VideoCourseService], (service: VideoCourseService) => {
    expect(service).toBeTruthy();
  }));

  // it('should get all courses', inject([VideoCourseService], (service: VideoCourseService) => {
  //   expect(service.getVideoCourses().length).toBe(5);
  // }));

  it('should add course', inject([VideoCourseService], (service: VideoCourseService) => {
    const newCourse = service.addCourse(courseItem);
    expect(newCourse.id).toBe(testCourseId);
    expect(newCourse.title).toBe(testCourseTitle);
  }));

  it('should get course', inject([VideoCourseService], (service: VideoCourseService) => {
    service.addCourse(courseItem);
    const newCourse = service.getCourse(testCourseId);
    expect(newCourse.title).toBe(testCourseTitle);
  }));

  it('should update course', inject([VideoCourseService], (service: VideoCourseService) => {
    const id = 3;
    const updatedCourse = courseItem;
    updatedCourse.id = id;
    expect(service.getCourse(id).title).not.toBe(testCourseTitle);

    service.updateCourse(updatedCourse);

    expect(service.getCourse(id).title).toBe(testCourseTitle);
  }));

  // it('should delete course', inject([VideoCourseService], (service: VideoCourseService) => {
  //   service.removeCourse(3);
  //   expect(service.getVideoCourses().length).toBe(4);
  // }));
});
