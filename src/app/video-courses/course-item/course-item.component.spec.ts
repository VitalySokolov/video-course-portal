import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruncateModule } from 'ng2-truncate';
import { CourseItemComponent } from './course-item.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CourseDurationPipe } from '../course-duration.pipe';
import { HighlightCourseDirective } from '../highlight-course.directive';
import { RouterTestingModule } from '@angular/router/testing';

describe('CourseItemComponent', () => {
  const courseId = 123;
  const courseTitle = 'Test Title';
  const courseDescription = 'Some Description';
  const videoCourseItem = {
    id: courseId,
    title: courseTitle,
    description: courseDescription,
    date: new Date((new Date()).getTime() - 500000000),
    duration: 123,
    authors: [],
    isTopRated: true
  };

  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;
  let title: DebugElement;
  let description: DebugElement;
  let deleteButton: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TruncateModule, RouterTestingModule],
      declarations: [CourseItemComponent, CourseDurationPipe, HighlightCourseDirective]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    title = fixture.debugElement.query(By.css('.course-title'));
    description = fixture.debugElement.query(By.css('.course-description'));
    deleteButton = fixture.debugElement.query(By.css('.delete-button'));

    component.courseId = videoCourseItem.id;
    component.courseTitle = videoCourseItem.title;
    component.courseDescription = videoCourseItem.description;
    component.courseDate  = videoCourseItem.date;
    component.courseDuration = videoCourseItem.duration;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display course information', () => {
    expect(title.nativeElement.innerText).toBe(courseTitle.toUpperCase());
    expect(description.nativeElement.innerText).toBe(courseDescription);
  });

  it('should emit correct course id when click "Delete" button', () => {
    let deletedCourseId: number;

    component.courseDeleted.subscribe((id: number) => {
      deletedCourseId = id;
    });

    deleteButton.triggerEventHandler('click', null);
    expect(deletedCourseId).toBe(courseId);
  });
});
