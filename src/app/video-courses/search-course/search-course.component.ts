import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VideoCourseService } from '@video-courses/video-course.service';

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.css']
})
export class SearchCourseComponent {

  constructor(private courseService: VideoCourseService, private router: Router) {
  }

  search(searchString: string | undefined) {
    const searchStr = searchString || '';

    this.courseService.searchCourses(searchStr);
  }

  onAddCourse() {
    this.router.navigate(['/courses/new']);
  }
}
