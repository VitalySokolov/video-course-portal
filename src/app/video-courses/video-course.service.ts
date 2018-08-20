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
  private courseListChange = new Subject<VideoCourseItem[]>();

  constructor(private httpClient: HttpClient) {
  }

  public getCourseListChange(): Subject<VideoCourseItem[]> {
    return this.courseListChange;
  }

  public getVideoCourses(): void {
    if (this.courseList.length > 0) {
      this.courseListChange.next(this.courseList);
    } else {
      this.fetchVideoCourses();
    }
  }

  private fetchVideoCourses() {
    this.httpClient.get<CourseItem[]>(`${this.BASE_URL}`)
      .subscribe(response => {
        this.courseList = response.map(course => {
          return this.convertToVideoCourseItem(course);
        });
        this.courseListChange.next(this.courseList);
      });
  }

  public addCourse(course: VideoCourseItem): void {
    const courseForUpdate = {
      ...course,
      name: course.title,
      length: course.duration,
      date: course.date.toDateString()
    };

    this.httpClient.post<CourseItem>(`${this.BASE_URL}`, courseForUpdate)
      .subscribe(updatedCourse => {
        course.id = updatedCourse.id;
        this.courseList = [...this.courseList, course];
        this.courseListChange.next(this.courseList);
      });
  }

  public getCourse(id: number): VideoCourseItem | undefined {
    return this.courseList.find((course) => course.id === id);
  }

  public removeCourse(id: number): void {
    this.httpClient.delete(`${this.BASE_URL}/${id}`)
      .subscribe();
    this.courseList = this.courseList.filter((course) => course.id !== id);
  }

  public updateCourse(videoCourse: VideoCourseItem): void {
    const courseForUpdate = {
      ...videoCourse,
      name: videoCourse.title,
      length: videoCourse.duration,
      date: videoCourse.date.toDateString()
    };
    this.httpClient.put<CourseItem>(`${this.BASE_URL}/${courseForUpdate.id}`, courseForUpdate)
      .subscribe((updatedCourseItem) => {
          const updatedCourse = this.convertToVideoCourseItem(updatedCourseItem);

          this.courseList = this.courseList.map((course) => {
            return course.id === updatedCourse.id ? updatedCourse : course;
          });
          this.courseListChange.next(this.courseList);
        },
        (error) => {
          this.courseList = this.courseList.map((course) => {
            return course.id === videoCourse.id ? videoCourse : course;
          });
          this.courseListChange.next(this.courseList);
        });
  }

  private convertToVideoCourseItem(course: CourseItem): VideoCourseItem {
    return {
      id: course.id,
      title: course.name,
      description: course.description,
      authors: course.authors.slice(),
      duration: course.length,
      date: new Date(course.date),
      isTopRated: course.isTopRated
    };
  }
}
