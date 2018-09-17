import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';

import { Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { VideoCourseItem } from '../video-course-item.model';
import { VideoCourseService } from '../video-course.service';
import { DeleteCourseConfirmationComponent } from '../delete-course-confirmation/delete-course-confirmation.component';
import * as fromRoot from '../../state/app.state';
import * as coursesActions from '../state/courses.actions';
import * as fromCourses from '../state/courses.reducer';
import { takeWhile } from 'rxjs/operators';

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
  private componentIsActive = true;

  constructor(
    private videoCourseService: VideoCourseService,
    private dialog: MatDialog,
    public snackBar: MatSnackBar,
    private store: Store<fromRoot.State>) {
  }

  ngOnInit() {
    // this.courseListSubscription = this.videoCourseService.getCourseListChange()
    //   .subscribe((courseList) => {
    //     this.courseList = courseList;
    //   });
    // this.serverErrorSubscription = this.videoCourseService.getServerConnectionError()
    //   .subscribe(() => {
    //     this.snackBar.open('Connection to server failed. Please try again later.', '', {
    //       duration: 3000
    //     });
    //   });

    this.store.pipe(
      select(fromCourses.getCourseList),
      takeWhile(() => this.componentIsActive)
    ).subscribe(
      courseList => this.courseList = [...courseList]
    );

    this.refreshCourseList();
  }

  ngOnDestroy() {
    // this.courseListSubscription.unsubscribe();
    this.componentIsActive = false;
  }

  refreshCourseList() {
    this.store.dispatch(new coursesActions.GetCourses(''));
    // this.videoCourseService.getVideoCourses();
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
