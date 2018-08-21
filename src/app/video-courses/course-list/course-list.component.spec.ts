import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListComponent } from './course-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { VideoCourseService } from '../video-course.service';
import { FilterByTitlePipe } from '../filter-by-title.pipe';
import { MaterialModule } from '@material/material.module';
import { VideoCourseItem } from '@video-courses/video-course-item.model';
import { cold, getTestScheduler } from 'jasmine-marbles';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  let videoCourseService: Partial<VideoCourseService>;
  const videoCourses: VideoCourseItem[] = [
    {
      id: 123,
      title: 'Test Course 1',
      description: 'Description 1',
      date: new Date(),
      duration: 123,
      authors: [],
      isTopRated: true
    },
    {
      id: 124,
      title: 'Test Course 2',
      description: 'Description 2',
      date: new Date(),
      duration: 124,
      authors: [],
      isTopRated: false
    },
    {
      id: 125,
      title: 'Test Course 3',
      description: 'Description 3',
      date: new Date(),
      duration: 125,
      authors: [],
      isTopRated: false
    }
  ];

  const videoCourseServiceStub = {

      getCourseListChange() {
        return cold('--x|', {x: videoCourses});
      },

      getVideoCourses() {
      }
    }
  ;

  beforeEach(async(() => {
    videoCourseService = {getVideoCourses: jasmine.createSpy('getVideoCourses').and.returnValue(videoCourses)};

    TestBed.configureTestingModule({
      declarations: [CourseListComponent, FilterByTitlePipe],
      imports: [MaterialModule],
      providers: [{provide: VideoCourseService, useValue: videoCourseServiceStub}],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    getTestScheduler().flush();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should have valid videoCourses', () => {
    getTestScheduler().flush();
    fixture.detectChanges();
    expect(component.courseList.length).toBe(3);
  });
});
