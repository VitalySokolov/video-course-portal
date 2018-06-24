import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { SearchCourseComponent } from './search-course/search-course.component';

// import { TruncateModule } from 'ng2-truncate';

@NgModule({
  imports: [
    CommonModule,
    // TrancateModule
  ],
  declarations: [CourseListComponent, CourseItemComponent, SearchCourseComponent],
  exports: [CourseListComponent]
})
export class VideoCoursesModule {
}