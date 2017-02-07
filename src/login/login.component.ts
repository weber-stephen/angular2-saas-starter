import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
    
    loginForm: FormGroup;
    error: string;

    constructor(private router: Router, private formBuilder: FormBuilder, private authService:AuthenticationService) {
        
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
          email: ['', Validators.required],
          password: ['', Validators.required],
          rememberme: ['']
        });

        this.error = '';
    }

    doLogin() {
        if (this.loginForm.valid) {
            this.authService.loginFake(this.loginForm.value.email, this.loginForm.value.password)
            .then((user) => {
                console.log(user);
                this.router.navigate(['/']);
            });
        }
      }

    ngOnDestroy() {
      this.loginForm = null;
    }

}
