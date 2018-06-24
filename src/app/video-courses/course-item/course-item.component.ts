import { Component, Input, OnInit } from '@angular/core';
import { VideoCourseItem } from '../video-course-item.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {
  @Input() videoCourse: VideoCourseItem;

  constructor() {
  }

  ngOnInit() {
  }
}
