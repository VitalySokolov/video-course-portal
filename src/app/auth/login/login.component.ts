import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../shared/user.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      login: new FormControl('', {
        validators: [Validators.required]
      }),
      password: new FormControl('', {validators: [Validators.required]})
    });
    }

  ngOnDestroy(): void {
    // this.userLoginSubscription.unsubscribe();
  }

  onSubmit() {
    this.userService.login({
      name: this.loginForm.value.login,
      password: this.loginForm.value.password
    })
      .subscribe((response) => {
          this.router.navigate(['/courses']);
        },
        (error) => {
          console.log(`ERROR = ${JSON.stringify(error)}`);
          console.log('LOGIN FAILED ' + error.error);
        });
  }
}
