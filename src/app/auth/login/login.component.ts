import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '@shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage = '';

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      login: new FormControl('', {
        validators: [Validators.required]
      }),
      password: new FormControl('', {
        validators: [Validators.required]
      })
    });
    }

  onSubmit() {
    this.userService.login({
      name: this.loginForm.value.login,
      password: this.loginForm.value.password
    })
      .subscribe((response) => {
          this.errorMessage = '';
          this.router.navigate(['/courses']);
        },
        (error) => {
          this.errorMessage = error.error;
        });
  }
}
