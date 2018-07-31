import { LoginComponent } from './auth/login/login.component';
import { CourseListComponent } from './video-courses/course-list/course-list.component';
import { Route, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';
import { EditCourseComponent } from './video-courses/edit-course/edit-course.component';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

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
