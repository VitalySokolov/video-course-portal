import { Injectable } from '@angular/core';
import { VideoCourseItem } from './video-course-item.model';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { CourseItem } from './course-item.model';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideoCourseService {
  private readonly BASE_URL = 'http://localhost:3004/courses';
  private courseList: VideoCourseItem[] = [];
  private courseListChange = new Subject<VideoCourseItem[]>();
  private serverConnectionError = new Subject<void>();
  private searchText = new Subject<string>();

  constructor(private httpClient: HttpClient) {
    this.initSearchCourses();
  }

  public getCourseListChange(): Subject<VideoCourseItem[]> {
    return this.courseListChange;
  }

  public getServerConnectionError(): Subject<void> {
    return this.serverConnectionError;
  }

  public getVideoCourses(): void {
    if (this.courseList.length) {
      this.courseListChange.next(this.courseList);
    } else {
      this.fetchVideoCourses('').subscribe((courseList) => {
        this.courseList = courseList;
        this.courseListChange.next(this.courseList);
      });
    }
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

  public searchCourses(searchString: string) {
    this.searchText.next(searchString);
  }

  public removeCourse(id: number): void {
    this.httpClient.delete(`${this.BASE_URL}/${id}`)
      .subscribe(() => {
          this.courseList = this.courseList.filter((course) => course.id !== id);
          this.courseListChange.next(this.courseList);
        },
        () => {
          this.serverConnectionError.next();
        });
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
        () => {
          this.serverConnectionError.next();
        });
  }

  private initSearchCourses(): void {
    this.searchText.pipe(
      filter((text) => text.length > 3),
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((text) => this.fetchVideoCourses(text))
    ).subscribe((courseList) => {
      this.courseList = courseList;
      this.courseListChange.next(this.courseList);
    });
  }

  private fetchVideoCourses(textFragment: string): Observable<VideoCourseItem[]> {
    return this.httpClient.get<CourseItem[]>(`${this.BASE_URL}?textFragment=${textFragment}`).pipe(
      map(response => response.map(this.convertToVideoCourseItem))
    );
  }

  private convertToVideoCourseItem(course: CourseItem): VideoCourseItem {
    return {
      id: course.id,
      title: course.name,
      description: course.description,
      authors: course.authors,
      duration: course.length,
      date: new Date(course.date),
      isTopRated: course.isTopRated
    };
  }
}
