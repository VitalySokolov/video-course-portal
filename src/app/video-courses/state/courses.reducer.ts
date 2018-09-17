import { VideoCourseItem } from '@video-courses/video-course-item.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoursesActions, CoursesActionTypes } from '@video-courses/state/courses.actions';

export interface CoursesState {
  courseList: VideoCourseItem[];
  searchString: string;
}

const initialState: CoursesState = {
  courseList: [],
  searchString: ''
};

const getCoursesFeatureState = createFeatureSelector<CoursesState>('courses');

export const getCourseList = createSelector(
  getCoursesFeatureState,
  state => state.courseList
);

export function reducer(state = initialState, action: CoursesActions): CoursesState {
  switch (action.type) {
    case CoursesActionTypes.GetCoursesSuccess:
      return {
        ...state,
        courseList: action.payload
      };

    case CoursesActionTypes.GetCoursesFail:
      return {
        ...state
      };

    default:
      return state;
  }
}
