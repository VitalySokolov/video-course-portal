import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../shared/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  private userLoginSubscription: Subscription;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      login: new FormControl('', {
        validators: [Validators.required]
      }),
      password: new FormControl('', {validators: [Validators.required]})
    });

    this.userLoginSubscription = this.userService.authFailed.subscribe(
      (error) => {
        // this.loginForm.value.password = '';
        console.log('LOGIN FAILED ' + error);
      }
    );
  }

  ngOnDestroy(): void {
    this.userLoginSubscription.unsubscribe();
  }

  onSubmit() {
    this.userService.login({
      name: this.loginForm.value.login,
      password: this.loginForm.value.password
    });
  }
}
