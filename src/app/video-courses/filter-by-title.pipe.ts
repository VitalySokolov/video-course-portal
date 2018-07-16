import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByTitle'
})
export class FilterByTitlePipe implements PipeTransform {

  transform(allCourses: Partial<{title: string}>[], searchString: string): Partial<{title: string}>[] {
    if (!allCourses || !searchString) {
      return allCourses;
    }

    return allCourses.filter((course) => course.title.toLowerCase().includes(searchString.toLowerCase()));
  }
}
