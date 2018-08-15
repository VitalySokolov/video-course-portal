import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '@shared/user.model';
import { UserService } from '@shared/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentUser: User;
  isAuth = false;
  private authSubscription: Subscription;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.authSubscription = this.userService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
      if (authStatus) {
        this.currentUser = this.userService.getUserInfo();
      }
    });
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

  onLogout() {
    this.userService.logout();
  }
}
