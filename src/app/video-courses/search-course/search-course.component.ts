import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.css']
})
export class SearchCourseComponent implements OnInit {
  search = '';

  constructor() {
  }

  ngOnInit() {
  }

  onSearchClick() {
    console.log(this.search);
  }
}
