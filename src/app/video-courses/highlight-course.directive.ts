import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightCourse]'
})
export class HighlightCourseDirective implements OnInit {
  @Input('appHighlightCourse') courseDate: Date;

  private static isFreshCourse(courseDate: Date, currentDate: Date) {
    const millisecondsInDay = 1000 * 60 * 60 * 24;
    const twoWeeks = 14;
    const diffInDays = (currentDate.valueOf() - courseDate.valueOf()) / millisecondsInDay;

    return diffInDays <= twoWeeks;
  }

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    const currentDate = new Date();

    if (currentDate < this.courseDate) {
      this.highlightFutureCourse();
    } else if (HighlightCourseDirective.isFreshCourse(this.courseDate, currentDate)) {
      this.highlightFreshCourse();
    }
  }

  private highlightFutureCourse() {
    this.el.nativeElement.style.border = `3px solid blue`;
  }

  private highlightFreshCourse() {
    this.el.nativeElement.style.border = `3px solid green`;
  }
}
