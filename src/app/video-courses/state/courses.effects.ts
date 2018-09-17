import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { VideoCourseService } from '@video-courses/video-course.service';
import * as coursesActions from '@video-courses/state/courses.actions';
import { GetCourses } from '@video-courses/state/courses.actions';

@Injectable()
export class CoursesEffects {

  constructor(private courseService: VideoCourseService,
              private actions: Actions) {
  }

  @Effect()
  getCourses: Observable<Action> = this.actions.pipe(
    ofType(coursesActions.CoursesActionTypes.GetCourses),
    switchMap((action: GetCourses) => this.courseService.fetchVideoCourses(action.payload).pipe(
      map(courses => (new coursesActions.GetCoursesSuccess(courses))),
      catchError(err => of(new coursesActions.GetCoursesFail(err.error)))
    ))
  );
}
