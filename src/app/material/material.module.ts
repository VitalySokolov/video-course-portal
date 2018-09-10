import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatButtonModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatCheckboxModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
  ],
  exports: [
    FlexLayoutModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
  ],
  declarations: []
})
export class MaterialModule {
}
