import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightCourse]'
})
export class HighlightCourseDirective implements OnInit {
  static millisecondsInDay = 1000 * 60 * 60 * 24;

  @Input('appHighlightCourse') courseDate: Date;

  private static isFreshCourse(courseDate: Date, currentDate: Date) {
    const twoWeeks = 14;
    const diffInDays = (currentDate.getTime() - courseDate.getTime()) / HighlightCourseDirective.millisecondsInDay;

    return diffInDays <= twoWeeks;
  }

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.el.nativeElement.style.border = `3px solid transparent`;

    const currentDate = new Date();

    if (currentDate.getTime() < this.courseDate.getTime()) {
      this.highlightFutureCourse();
    } else if (HighlightCourseDirective.isFreshCourse(this.courseDate, currentDate)) {
      this.highlightFreshCourse();
    }
  }

  private highlightFutureCourse() {
    this.el.nativeElement.style.borderColor = `blue`;
  }

  private highlightFreshCourse() {
    this.el.nativeElement.style.borderColor = `green`;
  }
}
