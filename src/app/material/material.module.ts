import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  declarations: []
})
export class MaterialModule {
}
