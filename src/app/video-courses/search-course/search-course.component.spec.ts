import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCourseComponent } from './search-course.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('SearchCourseComponent', () => {
  let component: SearchCourseComponent;
  let fixture: ComponentFixture<SearchCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule],
      declarations: [SearchCourseComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
