import { Injectable } from '@angular/core';
import { VideoCourseItem } from './video-course-item.model';

@Injectable({
  providedIn: 'root'
})
export class VideoCourseService {
  private courseList: VideoCourseItem[] = [
    {
      id: 1,
      title: 'Angular Course',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mauris est,' +
      ' convallis sed lobortis non, aliquam ac diam. Duis quis orci eros. Donec vitae nisl vulputate,' +
      ' finibus risus ultricies, sollicitudin tortor. Suspendisse sollicitudin sed tellus id malesuada.' +
      ' Praesent vitae laoreet justo, a scelerisque arcu. Fusce nec lorem mi. Donec non tortor erat.' +
      ' Aliquam sit amet augue sed velit scelerisque sollicitudin. Proin gravida fermentum metus, nec laoreet' +
      ' metus laoreet ut. Maecenas vitae dictum nulla. Nam interdum lorem quis ultrices rutrum. Nunc fermentum' +
      ' sodales nisi, sed ultricies augue dignissim quis. Vestibulum id elit orci. Sed rhoncus mauris sed' +
      ' ultricies gravida.',
      date: new Date((new Date()).getTime() - 500000000),
      duration: 88
    },
    {
      id: 2,
      title: 'React.js for beginners',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mauris est,' +
      ' convallis sed lobortis non, aliquam ac diam. Duis quis orci eros. Donec vitae nisl vulputate,' +
      ' finibus risus ultricies, sollicitudin tortor. Suspendisse sollicitudin sed tellus id malesuada.' +
      ' Praesent vitae laoreet justo, a scelerisque arcu. Fusce nec lorem mi. Donec non tortor erat.' +
      ' Aliquam sit amet augue sed velit scelerisque sollicitudin. Proin gravida fermentum metus, nec laoreet' +
      ' metus laoreet ut. Maecenas vitae dictum nulla. Nam interdum lorem quis ultrices rutrum. Nunc fermentum' +
      ' sodales nisi, sed ultricies augue dignissim quis. Vestibulum id elit orci. Sed rhoncus mauris sed' +
      ' ultricies gravida.',
      date: new Date((new Date()).getTime() + 500000000),
      duration: 27
    },
    {
      id: 3,
      title: 'Angular Advance Course',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mauris est,' +
      ' convallis sed lobortis non, aliquam ac diam. Duis quis orci eros. Donec vitae nisl vulputate,' +
      ' finibus risus ultricies, sollicitudin tortor. Suspendisse sollicitudin sed tellus id malesuada.' +
      ' Praesent vitae laoreet justo, a scelerisque arcu. Fusce nec lorem mi. Donec non tortor erat.' +
      ' Aliquam sit amet augue sed velit scelerisque sollicitudin. Proin gravida fermentum metus, nec laoreet' +
      ' metus laoreet ut. Maecenas vitae dictum nulla. Nam interdum lorem quis ultrices rutrum. Nunc fermentum' +
      ' sodales nisi, sed ultricies augue dignissim quis. Vestibulum id elit orci. Sed rhoncus mauris sed' +
      ' ultricies gravida.',
      date: new Date((new Date()).getTime()),
      duration: 70
    },
    {
      id: 4,
      title: 'Angular, React and Vue.js',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mauris est,' +
      ' convallis sed lobortis non, aliquam ac diam. Duis quis orci eros. Donec vitae nisl vulputate,' +
      ' finibus risus ultricies, sollicitudin tortor. Suspendisse sollicitudin sed tellus id malesuada.' +
      ' Praesent vitae laoreet justo, a scelerisque arcu. Fusce nec lorem mi. Donec non tortor erat.' +
      ' Aliquam sit amet augue sed velit scelerisque sollicitudin. Proin gravida fermentum metus, nec laoreet' +
      ' metus laoreet ut. Maecenas vitae dictum nulla. Nam interdum lorem quis ultrices rutrum. Nunc fermentum' +
      ' sodales nisi, sed ultricies augue dignissim quis. Vestibulum id elit orci. Sed rhoncus mauris sed' +
      ' ultricies gravida.',
      date: new Date((new Date()).getTime() - 5000000000),
      duration: 46
    },
    {
      id: 5,
      title: 'Mean stack',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mauris est,' +
      ' convallis sed lobortis non, aliquam ac diam. Duis quis orci eros. Donec vitae nisl vulputate,' +
      ' finibus risus ultricies, sollicitudin tortor. Suspendisse sollicitudin sed tellus id malesuada.' +
      ' Praesent vitae laoreet justo, a scelerisque arcu. Fusce nec lorem mi. Donec non tortor erat.' +
      ' Aliquam sit amet augue sed velit scelerisque sollicitudin. Proin gravida fermentum metus, nec laoreet' +
      ' metus laoreet ut. Maecenas vitae dictum nulla. Nam interdum lorem quis ultrices rutrum. Nunc fermentum' +
      ' sodales nisi, sed ultricies augue dignissim quis. Vestibulum id elit orci. Sed rhoncus mauris sed' +
      ' ultricies gravida.',
      date: new Date((new Date()).getTime() - 1000000000),
      duration: 30
    },
  ];

  public getVideoCourses(): VideoCourseItem[] {
    return this.courseList;
  }

  public addCourse(course: VideoCourseItem): VideoCourseItem {
    const list = this.courseList;
    course.id = list.length ? ++list[list.length - 1].id : 1;
    this.courseList = [...list, course];

    return course;
  }

  public getCourse(id: number): VideoCourseItem | undefined {
    return this.courseList.find((course) => course.id === id);
  }

  public removeCourse(id: number): void {
    this.courseList = this.courseList.filter((course) => course.id !== id);
  }

  public updateCourse(updatedCourse: VideoCourseItem): void {
    this.courseList = this.courseList.map((course) => {
      return course.id === updatedCourse.id ? updatedCourse : course;
    });
  }
}
