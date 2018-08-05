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
  private userLogin: Subscription;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      login: new FormControl('', {
        validators: [Validators.required]
      }),
      password: new FormControl('', { validators: [Validators.required] })
    });
  }

  ngOnDestroy(): void {
    // this.userLogin.unsubscribe();
  }

  onSubmit() {
    this.userService.login({
      name: this.loginForm.value.login,
      password: this.loginForm.value.password
    });
  }
}
