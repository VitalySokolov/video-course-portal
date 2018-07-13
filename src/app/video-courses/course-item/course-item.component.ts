import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {
  @Input() courseId: number;

  @Input() courseTitle: string;
  @Input() courseDescription: string;
  @Input() courseDateMillis: number;
  courseDate: Date;
  @Input() courseDuration: number;
  @Output() courseDeleted = new EventEmitter<number>();

  ngOnInit(): void {
    this.courseDate = new Date(this.courseDateMillis);
  }
}
