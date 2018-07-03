import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruncateModule } from 'ng2-truncate';
import { CourseItemComponent } from './course-item.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CourseItemComponent', () => {
  const courseId = 123;
  const courseTitle = 'Test Title';
  const courseDescription = 'Some Description';
  const videoCourseItem = {
    id: courseId,
    title: courseTitle,
    description: courseDescription,
    date: new Date(),
    duration: 123
  };

  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;
  let title: DebugElement;
  let description: DebugElement;
  let deleteButton: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TruncateModule],
      declarations: [CourseItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    title = fixture.debugElement.query(By.css('h3'));
    description = fixture.debugElement.query(By.css('p'));
    deleteButton = fixture.debugElement.query(By.css('.btn-danger'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display course information', () => {
    component.videoCourse = videoCourseItem;

    fixture.detectChanges();
    expect(title.nativeElement.innerText).toBe(courseTitle);
    expect(description.nativeElement.innerText).toBe(courseDescription);
  });

  it('should emit correct course id when click "Delete" button', () => {
    let deletedCourseId: number;
    component.videoCourse = videoCourseItem;
    fixture.detectChanges();
    component.courseDeleted.subscribe((id: number) => {
      deletedCourseId = id;
      console.log('Delete button clicked');
    });

    deleteButton.triggerEventHandler('click', null);
    expect(deletedCourseId).toBe(courseId);
  });
});
