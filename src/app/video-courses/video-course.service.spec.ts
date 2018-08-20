import { TestBed, inject } from '@angular/core/testing';

import { VideoCourseService } from './video-course.service';
import { VideoCourseItem } from './video-course-item.model';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('VideoCourseService', () => {
  const newCourseId = 1234;
  const existingCourseId = 8693;
  const testCourseTitle = 'Course Title';
  const testCourse1 = 'Test course 1';

  const courseItem: VideoCourseItem = {
    id: 0,
    title: testCourseTitle,
    description: 'Description',
    date: new Date(),
    duration: 123,
    authors: [
      {id: 1370, firstName: 'Polly', lastName: 'Sosa'}
    ],
    isTopRated: true
  };

  const getAllResponse = [
    {
      'id': existingCourseId,
      'name': testCourse1,
      'description': 'Test description.',
      'isTopRated': false,
      'date': '2017-09-28T04:39:24+00:00',
      'authors': [
        {'id': 1370, 'firstName': 'Polly', 'lastName': 'Sosa'}
      ],
      'length': 157
    },
    {
      'id': 4980,
      'name': 'Test course 2',
      'description': 'Description',
      'isTopRated': true,
      'date': '2016-05-31T02:02:36+00:00',
      'authors': [
        {'id': 8413, 'firstName': 'Greta', 'lastName': 'Richardson'},
        {'id': 7458, 'firstName': 'Deana', 'lastName': 'Bruce'},
        {'id': 5508, 'firstName': 'Patsy', 'lastName': 'Bright'}
      ],
      'length': 207
    }];

  const testLoginUrl = 'http://localhost:3004/courses';
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VideoCourseService]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', inject([VideoCourseService], (service: VideoCourseService) => {
    expect(service).toBeTruthy();
  }));

  it('should get all courses', inject([VideoCourseService], (service: VideoCourseService) => {
    service.getCourseListChange().subscribe(courses => expect(courses.length).toBe(2));

    initService(service);
  }));

  it('should add course', inject([VideoCourseService], (service: VideoCourseService) => {
    const newCourseJson = {
      'id': newCourseId,
      'name': testCourseTitle,
      'description': 'Description',
      'isTopRated': false,
      'date': courseItem.date.toDateString(),
      'authors': [
        {'id': 1370, 'firstName': 'Polly', 'lastName': 'Sosa'}
      ],
      'length': 123
    };

    initService(service);

    service.addCourse(courseItem);

    const req = httpTestingController.expectOne(`${testLoginUrl}`);
    expect(req.request.method).toEqual('POST');
    req.flush(newCourseJson);

    expect(service.getCourse(newCourseId).title).toBe(testCourseTitle);
  }));

  it('should get course', inject([VideoCourseService], (service: VideoCourseService) => {
    initService(service);

    expect(service.getCourse(existingCourseId).title).toBe(testCourse1);
  }));

  it('should update course', inject([VideoCourseService], (service: VideoCourseService) => {
    const updatedCourseJson = {
      'id': existingCourseId,
      'name': testCourseTitle,
      'description': 'Description',
      'isTopRated': false,
      'date': courseItem.date.toDateString(),
      'authors': [
        {'id': 1370, 'firstName': 'Polly', 'lastName': 'Sosa'}
      ],
      'length': 123
    };

    initService(service);
    const updatedCourse = {
      ...courseItem,
      id: existingCourseId
    };

    expect(service.getCourse(existingCourseId).title).not.toBe(testCourseTitle);
    service.updateCourse(updatedCourse);
    service.getCourseListChange().subscribe(courses => {
      expect(courses.length).toBe(2);
      expect(service.getCourse(existingCourseId).title).toBe(testCourseTitle);
    });

    const req = httpTestingController.expectOne(`${testLoginUrl}/${existingCourseId}`);
    expect(req.request.method).toEqual('PUT');
    req.flush(updatedCourseJson);
  }));

  it('should delete course', inject([VideoCourseService], (service: VideoCourseService) => {
    service.removeCourse(existingCourseId);

    const req = httpTestingController.expectOne(`${testLoginUrl}/${existingCourseId}`);
    expect(req.request.method).toEqual('DELETE');
    req.flush({});

    expect(service.getCourse(existingCourseId)).toBe(undefined);
  }));

  const initService = (service: VideoCourseService) => {
    service.getVideoCourses();

    const req = httpTestingController.expectOne(testLoginUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(getAllResponse);
  };
});
