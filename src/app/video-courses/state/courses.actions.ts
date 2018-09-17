import { VideoCourseItem } from '@video-courses/video-course-item.model';

export enum CoursesActionTypes {
  GetCourses = '[Courses] Get Courses',
  GetCoursesSuccess = '[Courses] Get Courses Success',
  GetCoursesFail = '[Courses] Get Courses Fail',
}

export class GetCourses {
  readonly type = CoursesActionTypes.GetCourses;

  constructor(public payload: string) {
  }
}

export class GetCoursesSuccess {
  readonly type = CoursesActionTypes.GetCoursesSuccess;

  constructor(public payload: VideoCourseItem[]) {
  }
}

export class GetCoursesFail {
  readonly type = CoursesActionTypes.GetCoursesFail;

  constructor(public payload: string) {
  }
}

export type CoursesActions = GetCourses
  | GetCoursesSuccess
  | GetCoursesFail;
