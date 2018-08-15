import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCourseConfirmationComponent } from './delete-course-confirmation.component';
import { MaterialModule } from '@material/material.module';
import { MAT_DIALOG_DATA } from '@angular/material';

describe('DeleteCourseConfirmationComponent', () => {
  let component: DeleteCourseConfirmationComponent;
  let fixture: ComponentFixture<DeleteCourseConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteCourseConfirmationComponent],
      imports: [MaterialModule],
      providers: [
        {provide: MAT_DIALOG_DATA, useValue: {}},
      ]
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
