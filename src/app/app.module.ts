import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CoreModule } from '@core/core.module';
import { VideoCoursesModule } from '@video-courses/video-courses.module';
import { AuthModule } from '@auth/auth.module';
import { AppRoutingModule } from './app.routing.module';
import { AuthInterceptor } from '@shared/auth-interceptor';
import { LoadingInterceptor } from '@shared/loading.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AuthModule,
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    VideoCoursesModule,
    StoreModule.forRoot({}),

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
