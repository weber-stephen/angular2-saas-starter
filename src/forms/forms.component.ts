import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'forms-component',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit, OnDestroy {
    
    loginForm: FormGroup;
    error: string;

    constructor(private formBuilder: FormBuilder, private router:Router) {
        
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
          email: [
            '',
            Validators.required,
            CustomValidators.email
          ],
          password: [
            '',
            CustomValidators.min(6)
          ],
          zip: [
            '',
            Validators.pattern('[A-Za-z]{5}')
           ]
        });

        this.error = '';
    }

    submitForm() {
      console.log(this.loginForm.value);
    }

    ngOnDestroy() {
      this.loginForm = null;
    }

}
