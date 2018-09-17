import { Component, OnInit } from '@angular/core';

import { UserService } from '@shared/user.service';
import { LoaderService } from '@shared/loader.service';
import { MatDialog } from '@angular/material';
import { LoaderComponent } from '@core/loader/loader.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public userService: UserService,
              private loaderService: LoaderService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    // this.loaderService.getLoaderState().subscribe((state) => {
    //   if (state) {
    //     this.openLoadingDialog();
    //   } else {
    //     this.closeLoadingDialog();
    //   }
    // });
  }

  openLoadingDialog() {
    this.dialog.open(LoaderComponent);

  }

  closeLoadingDialog() {
    this.dialog.closeAll();
  }
}
