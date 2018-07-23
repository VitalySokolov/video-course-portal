import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-delete-course-confirmation',
  templateUrl: './delete-course-confirmation.component.html',
  styleUrls: ['./delete-course-confirmation.component.css']
})
export class DeleteCourseConfirmationComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public passedData: any) {
  }

}
