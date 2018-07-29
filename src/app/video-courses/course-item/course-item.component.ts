import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent {
  @Input() courseId: number;

  @Input() courseTitle: string;
  @Input() courseDescription: string;
  @Input() courseDate: Date;
  @Input() courseDuration: number;
  @Output() courseDeleted = new EventEmitter<number>();
}
