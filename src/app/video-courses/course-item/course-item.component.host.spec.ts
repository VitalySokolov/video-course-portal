import { Component } from '@angular/core';
import { VideoCourseItem } from '../video-course-item.model';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseItemComponent } from './course-item.component';
import { By } from '@angular/platform-browser';
import { TruncateModule } from 'ng2-truncate';

@Component({
  template: `
    <app-course-item
      [courseId]="course.id"
      [courseTitle]="course.title"
      [courseDescription]="course.description"
      [courseDate]="course.date"
      [courseDuration]="course.duration"
      (courseDeleted)="onCourseDeleted(course.id)">
    </app-course-item>`
})
class TestHostComponent {
  courseTitle = 'Test Course';
  courseDescription = 'Description';
  courseId = 123;
  course: VideoCourseItem = {
    id: this.courseId,
    title: this.courseTitle,
    description: this.courseDescription,
    date: new Date(),
    duration: 123
  };
  deletedId: number;

  onCourseDeleted(id: number) {
    this.deletedId = id;
  }
}

describe('CourseItemComponent with Test Host', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseItemComponent, TestHostComponent],
      imports: [TruncateModule],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display course information', () => {
    const title = fixture.debugElement.query(By.css('h3'));
    const description = fixture.debugElement.query(By.css('p'));

    expect(title.nativeElement.innerText).toBe(testHost.courseTitle);
    expect(description.nativeElement.innerText).toBe(testHost.courseDescription);
  });

  it('should emit correct course id when click "Delete" button', () => {
    const deleteButton = fixture.debugElement.query(By.css('.btn-danger'));
    deleteButton.triggerEventHandler('click', null);

    expect(testHost.deletedId).toBe(testHost.courseId);
  });
});