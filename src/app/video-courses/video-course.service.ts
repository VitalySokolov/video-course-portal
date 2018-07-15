import { Injectable } from '@angular/core';
import { VideoCourseItem } from './video-course-item.model';

@Injectable({
  providedIn: 'root'
})
export class VideoCourseService {

  constructor() {
  }

  public getVideoCourses(): VideoCourseItem[] {
    return [
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
        date: (new Date()).valueOf() - 500000000,
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
        date: (new Date()).valueOf() + 500000000,
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
        date: (new Date()).valueOf(),
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
        date: (new Date()).valueOf() - 5000000000,
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
        date: (new Date()).valueOf() - 1000000000,
        duration: 30
      },
    ];
  }
}
