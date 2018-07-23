import { Component, OnInit } from '@angular/core';
import { VideoCourseItem } from '../video-course-item.model';
import { VideoCourseService } from '../video-course.service';
import { MatDialog } from '@angular/material';
import { DeleteCourseConfirmationComponent } from '../delete-course-confirmation/delete-course-confirmation.component';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courseList: VideoCourseItem[] = [];
  searchString: string;

  constructor(private videoCourseService: VideoCourseService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.refreshCourseList();
  }

  refreshCourseList() {
    this.courseList = this.videoCourseService.getVideoCourses();
  }

  onCourseDeleted(courseId: number) {
    const dialogRef = this.dialog.open(DeleteCourseConfirmationComponent, {
      data: {
        id: courseId
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.videoCourseService.removeCourse(courseId);
        this.refreshCourseList();
      }
    });
  }

  loadMoreCourses() {
    console.log('LoadMore button pressed');
  }

  onSearchCourseClick(search: string) {
    this.searchString = search;
  }
}
