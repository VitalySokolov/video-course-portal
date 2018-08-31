import { Component, OnDestroy, OnInit } from '@angular/core';
import { VideoCourseItem } from '../video-course-item.model';
import { VideoCourseService } from '../video-course.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { DeleteCourseConfirmationComponent } from '../delete-course-confirmation/delete-course-confirmation.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, OnDestroy {
  courseList: VideoCourseItem[] = [];
  searchString: string;
  private courseListSubscription: Subscription;
  private serverErrorSubscription: Subscription;

  constructor(
    private videoCourseService: VideoCourseService,
    private dialog: MatDialog,
    public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.courseListSubscription = this.videoCourseService.getCourseListChange()
      .subscribe((courseList) => {
        this.courseList = courseList;
      });
    this.serverErrorSubscription = this.videoCourseService.getServerConnectionError()
      .subscribe(() => {
        this.snackBar.open('Connection to server failed. Please try again later.', '', {
          duration: 3000
        });
      });
    this.refreshCourseList();
  }

  ngOnDestroy() {
    this.courseListSubscription.unsubscribe();
  }

  refreshCourseList() {
    this.videoCourseService.getVideoCourses();
  }

  onCourseDeleted(courseId: number) {
    const dialogRef = this.dialog.open(DeleteCourseConfirmationComponent, {
      data: {
        id: courseId
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.videoCourseService.removeCourse(courseId);
        this.refreshCourseList();
      }
    });
  }

  loadMoreCourses() {
    console.log('LoadMore button pressed');
  }
}
