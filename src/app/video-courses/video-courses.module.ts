import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { TruncateModule } from 'ng2-truncate';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CourseListComponent } from './course-list/course-list.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { SearchCourseComponent } from './search-course/search-course.component';
import { CourseDurationPipe } from './course-duration.pipe';
import { FilterByTitlePipe } from './filter-by-title.pipe';
import { HighlightCourseDirective } from './highlight-course.directive';
import { MaterialModule } from '@material/material.module';
import { DeleteCourseConfirmationComponent } from './delete-course-confirmation/delete-course-confirmation.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { CoursesEffects } from '@video-courses/state/courses.effects';
import { reducer } from '@video-courses/state/courses.reducer';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    TruncateModule,
    StoreModule.forFeature('courses', reducer),
    EffectsModule.forFeature([CoursesEffects])
  ],
  declarations: [
    CourseListComponent,
    CourseItemComponent,
    SearchCourseComponent,
    CourseDurationPipe,
    FilterByTitlePipe,
    HighlightCourseDirective,
    DeleteCourseConfirmationComponent,
    EditCourseComponent
  ],
  exports: [CourseListComponent, EditCourseComponent],
  entryComponents: [DeleteCourseConfirmationComponent]
})
export class VideoCoursesModule {
}
