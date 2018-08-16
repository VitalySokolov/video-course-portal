import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { VideoCourseService } from '@video-courses/video-course.service';
import { VideoCourseItem } from '@video-courses/video-course-item.model';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditCourseComponent implements OnInit {
  course: VideoCourseItem;

  constructor(private courseService: VideoCourseService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      if (data['id']) {
        this.course = this.courseService.getCourse(+data['id']);
      } else {
        this.course = {id: 0, title: '', description: '', date: null, duration: 0, authors: [], isTopRated: false};
      }
    });
  }

  onSubmit() {
    if (this.course.id === 0) {
      this.courseService.addCourse(this.course);
    } else {
      this.courseService.updateCourse(this.course);
    }
    this.router.navigate(['/courses']);
  }

  onCancel() {
    this.router.navigate(['/courses']);
  }
}
