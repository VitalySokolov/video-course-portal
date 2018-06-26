import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {VideoCourseItem} from '../video-course-item.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {
  @Input() videoCourse: VideoCourseItem;
  @Output() courseDeleted = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }
}
