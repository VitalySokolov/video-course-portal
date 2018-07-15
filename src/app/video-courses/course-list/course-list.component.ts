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
  searchString: string;

  constructor(private videoCourseService: VideoCourseService) {
  }

  ngOnInit() {
    this.courseList = this.videoCourseService.getVideoCourses();
  }

  onCourseDeleted(courseId: number) {
    console.log(`Course with id ${courseId} deleted.`);
  }

  loadMoreCourses() {
    console.log('LoadMore button pressed');
  }

  onSearchCourseClick(search: string) {
    this.searchString = search;
  }
}
