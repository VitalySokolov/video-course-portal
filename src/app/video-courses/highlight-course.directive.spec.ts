import { HighlightCourseDirective } from './highlight-course.directive';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <div class="fresh-course" [appHighlightCourse]="freshCourseDate">Fresh Course</div>
    <div class="future-course" [appHighlightCourse]="futureCourseDate">Future Course</div>
    <div class="old-course" [appHighlightCourse]="oldCourseDate">Old Course</div>`
})
class TestHostComponent {
  millisInDay = 1000 * 60 * 60 * 24;
  freshCourseDate = new Date((new Date()).valueOf() - this.millisInDay * 7);
  futureCourseDate = new Date((new Date()).valueOf() + this.millisInDay);
  oldCourseDate = new Date((new Date()).valueOf() - this.millisInDay * 21);
}

describe('Component with HighlightCourseDirective ', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(function () {
    fixture = TestBed.configureTestingModule({
      declarations: [HighlightCourseDirective, TestHostComponent]
    })
      .createComponent(TestHostComponent);

    testHost = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have blue border if its date is in the future', () => {
    const futureCourse = fixture.debugElement.query(By.css('.future-course'));
    expect(futureCourse.nativeElement.style.borderColor).toBe('blue');
  });

  it('should have green border if it is a fresh course', () => {
    const futureCourse = fixture.debugElement.query(By.css('.fresh-course'));
    expect(futureCourse.nativeElement.style.borderColor).toBe('green');
  });

  it('shouldn\'t have a border if its date is more than 2 weeks in a past', () => {
    const futureCourse = fixture.debugElement.query(By.css('.old-course'));
    expect(futureCourse.nativeElement.style.borderColor).toBe('');
  });
});
