import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { VideoCourseService } from '@video-courses/video-course.service';
import { VideoCourseItem } from '@video-courses/video-course-item.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditCourseComponent implements OnInit {
  course: VideoCourseItem;
  courseForm: FormGroup;

  constructor(private courseService: VideoCourseService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.courseForm = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      description: new FormControl(null, [Validators.required, Validators.maxLength(500)]),
      date: new FormControl(null, Validators.required),
      duration: new FormControl(null, Validators.required)
    });

    this.route.params.subscribe((data) => {
      if (data['id']) {
        this.course = this.courseService.getCourse(+data['id']);
        this.courseForm.setValue({
          title: this.course.title,
          description: this.course.description,
          date: this.course.date,
          duration: this.course.duration
        });
      } else {
        this.course = {id: 0, title: '', description: '', date: null, duration: 0, authors: [], isTopRated: false};
      }
    });
  }

  onSubmit() {
    console.log(this.courseForm.value);
    this.course = {...this.course, ...this.courseForm.value};
    console.log(this.course);
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
