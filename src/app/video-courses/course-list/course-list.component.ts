import { Component, OnInit } from '@angular/core';
import { VideoCourseItem } from '../video-course-item.model';
import { VideoCourseService } from '../video-course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courseList: VideoCourseItem[] = [];

  constructor(private videoCourseService: VideoCourseService) {
  }

  ngOnInit() {
    this.courseList = this.videoCourseService.getVideoCourses();
  }
}
