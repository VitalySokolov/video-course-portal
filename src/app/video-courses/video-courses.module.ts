import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { SearchCourseComponent } from './search-course/search-course.component';
import { FormsModule } from '@angular/forms';

import { TruncateModule } from 'ng2-truncate';
import { CourseDurationPipe } from './course-duration.pipe';
import { FilterByTitlePipe } from './filter-by-title.pipe';
import { HighlightCourseDirective } from './highlight-course.directive';
import { MaterialModule } from '../material/material.module';
import { DeleteCourseConfirmationComponent } from './delete-course-confirmation/delete-course-confirmation.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TruncateModule,
    MaterialModule
  ],
  declarations: [
    CourseListComponent,
    CourseItemComponent,
    SearchCourseComponent,
    CourseDurationPipe,
    FilterByTitlePipe,
    HighlightCourseDirective,
    DeleteCourseConfirmationComponent
  ],
  exports: [CourseListComponent],
  entryComponents: [DeleteCourseConfirmationComponent]
})
export class VideoCoursesModule {
}
