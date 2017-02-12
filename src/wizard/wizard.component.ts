import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CustomValidators } from 'ng2-validation';

import { RolesService } from '../services/roles.service';

@Component({
  selector: 'wizard-component',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit, OnDestroy {
    
    steps:Array<any> = [];

    currentStepIndex = -1;
    currentStep:any;

    roles:Array<any> = [];

    constructor(private formBuilder: FormBuilder, private router:Router, private rolesService:RolesService) {

        this.steps = [
          {
            label:'Create User',
            id:'create-user',
            status:'',
            form: this.formBuilder.group({
              first_name: ['', Validators.required],
              last_name: ['', Validators.required],
              email: ['', Validators.required],
              password: ['', Validators.required]
            })
          },
          {
            label:'Add Roles',
            id:'add-roles',
            status:'',
            form: this.formBuilder.group({
              role: ['', Validators.required]
            })
          },
          {
            label:'All Done',
            id:'all-done',
            status:'',
            form: this.formBuilder.group({
              done: ['']
            })
          }
      ];

    }

    ngOnInit() {
      this.onNextStep();

      this.rolesService.getAll()
      .subscribe((result) => {
        this.roles = result;
      });

    }

    private onNextStep() {
      if(this.currentStepIndex < (this.steps.length)) {
        if(this.currentStepIndex > -1) {
          this.steps[this.currentStepIndex].status = 'complete';
        }
        this.currentStepIndex++;
        this.steps[this.currentStepIndex].status = 'active';
        this.currentStep = this.steps[this.currentStepIndex];
      }
    }

    private onPreviousStep() {
      if(this.currentStepIndex > 0) {
        this.steps[this.currentStepIndex].status = '';
        this.currentStepIndex--;
        this.steps[this.currentStepIndex].status = 'active';
        this.currentStep = this.steps[this.currentStepIndex];
      }
    }

    onNext(e) {
      this.onNextStep();
    }

    onBack(e) {
      this.onPreviousStep();
    }

    onFinish(e) {
      this.router.navigate(['/']);
    }

    ngOnDestroy() {
      
    }

}
