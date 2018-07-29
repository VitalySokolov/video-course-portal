import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.css']
})
export class SearchCourseComponent {
  @Output() searchCourse = new EventEmitter<string>();

  search = '';

  constructor(private router: Router) {
  }

  onSearchClick() {
    this.searchCourse.emit(this.search);
  }

  onAddCourse() {
    this.router.navigate(['/courses/new']);
  }
}
