import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'forms-component',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit, OnDestroy {
    
    formExample: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        
    }

    ngOnInit() {
        this.formExample = this.formBuilder.group({
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
    }

    submitForm() {
      console.log(this.formExample.value);
    }

    ngOnDestroy() {
      this.formExample = null;
    }

}
