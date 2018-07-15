import { Pipe, PipeTransform } from '@angular/core';
import { VideoCourseItem } from './video-course-item.model';

@Pipe({
  name: 'filterByTitle'
})
export class FilterByTitlePipe implements PipeTransform {

  transform(allCourses: VideoCourseItem[], searchString: string): VideoCourseItem[] {
    if (!allCourses || !searchString) {
      return allCourses;
    }

    return allCourses.filter((course) => course.title.toLowerCase().includes(searchString.toLowerCase()));
  }
}
