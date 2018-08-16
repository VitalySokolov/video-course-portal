import { Injectable } from '@angular/core';
import { VideoCourseItem } from './video-course-item.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { CourseItem } from './course-item.model';

@Injectable({
  providedIn: 'root'
})
export class VideoCourseService {
  private readonly BASE_URL = 'http://localhost:3004/courses';
  private courseList: VideoCourseItem[] = [];
  public courseListChange = new Subject<VideoCourseItem[]>();

  constructor(private httpClient: HttpClient) {
  }

  public getVideoCourses(): void {
    if (this.courseList.length > 0) {
      this.courseListChange.next(this.courseList);
    } else {
      this.fetchVideoCourses(0, 20);
    }
  }

  private fetchVideoCourses(startIndex: number, amount: number) {
    this.httpClient.get<CourseItem[]>(`${this.BASE_URL}?start=${startIndex}&count=${amount}`)
      .subscribe(response => {
        this.courseList = response.map(course => {
          return {
            id: course.id,
            title: course.name,
            description: course.description,
            authors: course.authors.slice(),
            duration: course.length,
            date: new Date(course.date),
            isTopRated: course.isTopRated
          };
        });
        this.courseListChange.next(this.courseList);
      });
  }

  public addCourse(course: VideoCourseItem): VideoCourseItem {
    const list = this.courseList;
    course.id = list.length ? list[list.length - 1].id + 1 : 1;
    this.courseList = [...list, course];

    return course;
  }

  public getCourse(id: number): VideoCourseItem | undefined {
    return this.courseList.find((course) => course.id === id);
  }

  public removeCourse(id: number): void {
    this.httpClient.delete(`${this.BASE_URL}/${id}`)
      .subscribe(result => console.log(result));
    this.courseList = this.courseList.filter((course) => course.id !== id);
  }

  public updateCourse(updatedCourse: VideoCourseItem): void {
    this.httpClient.put(`${this.BASE_URL}/${updatedCourse.id}`, updatedCourse)
      .subscribe(result => console.log(result));
    this.courseList = this.courseList.map((course) => {
      return course.id === updatedCourse.id ? updatedCourse : course;
    });
  }
}
