import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListComponent } from './course-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { VideoCourseService } from '../video-course.service';
import { FilterByTitlePipe } from '../filter-by-title.pipe';
import { MaterialModule } from '@material/material.module';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  let videoCourseService: Partial<VideoCourseService>;
  const videoCourses = [
    {
      id: 123,
      title: 'Test Course 1',
      description: 'Description 1',
      date: (new Date()).getTime() - 500000000,
      duration: 123
    },
    {
      id: 124,
      title: 'Test Course 2',
      description: 'Description 2',
      date: (new Date()).getTime(),
      duration: 124
    },
    {
      id: 125,
      title: 'Test Course 3',
      description: 'Description 3',
      date: (new Date()).getTime() + 500000000,
      duration: 125
    }
  ];

  beforeEach(async(() => {
    videoCourseService = {getVideoCourses: jasmine.createSpy('getVideoCourses').and.returnValue(videoCourses)};

    TestBed.configureTestingModule({
      declarations: [CourseListComponent, FilterByTitlePipe],
      imports: [MaterialModule],
      providers: [{provide: VideoCourseService, useValue: videoCourseService}],
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
    expect(component).toBeTruthy();
  });

  it('should call getVideoCourses service method', () => {
    expect(videoCourseService.getVideoCourses).toHaveBeenCalled();
  });

  it('should have valid videoCourses', () => {
    expect(component.courseList.length).toBe(3);
  });
});
