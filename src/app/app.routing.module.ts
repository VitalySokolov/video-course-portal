import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { LoginComponent } from '@core/login/login.component';
import { CourseListComponent } from '@video-courses/course-list/course-list.component';
import { AuthGuard } from '@core/auth.guard';
import { EditCourseComponent } from '@video-courses/edit-course/edit-course.component';
import { PageNotFoundComponent } from '@core/page-not-found/page-not-found.component';

export const ROUTES: Route[] = [
  {path: '', redirectTo: 'courses', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'courses', component: CourseListComponent, canActivate: [AuthGuard]},
  {path: 'courses/new', component: EditCourseComponent, canActivate: [AuthGuard]},
  {path: 'courses/:id', component: EditCourseComponent, canActivate: [AuthGuard]},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
  providers: [AuthGuard, {provide: APP_BASE_HREF, useValue: '/'}]
})
export class AppRoutingModule {
}
