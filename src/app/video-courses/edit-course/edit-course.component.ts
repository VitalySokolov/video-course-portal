import { Component, OnInit } from '@angular/core';
import { VideoCourseService } from '../video-course.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VideoCourseItem } from '../video-course-item.model';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  course: VideoCourseItem;

  constructor(private courseService: VideoCourseService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      // console.log(`Data = ${data['id']}`);
      if (data['id']) {
        console.log(`Get course = ${this.courseService.getCourse(+data['id'])}`);
        this.course = this.courseService.getCourse(+data['id']);
      } else {
        this.course = {id: 0, title: '', description: '', date: null, duration: 0};
      }
    });
  }

  onSubmit(form: NgForm) {
    console.log('Submit');
    console.log(`Course = ${JSON.stringify(this.course)}`);
    console.log(JSON.stringify(form.value));
  }

  onCancel() {
    console.log('Cancel');
  }
}
