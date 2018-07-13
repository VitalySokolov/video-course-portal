import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { SearchCourseComponent } from './search-course/search-course.component';
import { FormsModule } from '@angular/forms';

import { TruncateModule } from 'ng2-truncate';
import { CourseDurationPipe } from './course-duration.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TruncateModule
  ],
  declarations: [CourseListComponent, CourseItemComponent, SearchCourseComponent, CourseDurationPipe],
  exports: [CourseListComponent]
})
export class VideoCoursesModule {
}
