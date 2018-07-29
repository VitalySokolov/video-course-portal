import { Component, OnInit } from '@angular/core';
import { VideoCourseService } from '../video-course.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  constructor(private courseService: VideoCourseService) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log('Submit');
    console.log(JSON.stringify(form.value));
  }

  onCancel() {
    console.log('Cancel');
  }
}
