import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';

import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'signup-component',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy {
      
    signupForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private router:Router, private authService:AuthenticationService) {
        
    }

    ngOnInit() {
        this.signupForm = this.formBuilder.group({
          email: [
            '',
            Validators.required
          ],
          password: [
            '',
            Validators.required
          ]
        });
    }

    onSubmit(value) {
        if (this.signupForm.valid) {
            this.authService.loginFake(this.signupForm.value.email, this.signupForm.value.password)
            .then((user) => {
                console.log(user);
                this.router.navigate(['/']);
            });
        }
    }

    ngOnDestroy() {
        this.signupForm = null;
    }

}
