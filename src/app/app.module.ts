import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { TruncateModule } from 'ng2-truncate';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { VideoCoursesModule } from './video-courses/video-courses.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    // TrancateModule,
    VideoCoursesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
