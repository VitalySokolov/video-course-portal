import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.css']
})
export class SearchCourseComponent implements OnInit {
  @Output() searchCourse = new EventEmitter<string>();

  search = '';

  constructor() {
  }

  ngOnInit() {
  }

  onSearchClick() {
    this.searchCourse.emit(this.search);
  }
}
