import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCourseConfirmationComponent } from './delete-course-confirmation.component';

describe('DeleteCourseConfirmationComponent', () => {
  let component: DeleteCourseConfirmationComponent;
  let fixture: ComponentFixture<DeleteCourseConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCourseConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCourseConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
