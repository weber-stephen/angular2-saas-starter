import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';

import { User } from '../models/user.model';

import { UserFilterPipe } from '../pipes/user-filer.pipe';

@Component({
  selector: 'users-component',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  @ViewChild('userFilterInput')
  userFilterInput: ElementRef;

  @ViewChild('container')
  container: ElementRef;
  
  users: Array<User> = [];
  selectedUser: User = new User();

  scrollHeight:string;

  constructor(public router:Router, private auth:AuthenticationService, private userService:UserService) {
    
  }

  ngOnInit() {

    let eventObservable = Observable.fromEvent(this.userFilterInput.nativeElement, 'keyup')
    eventObservable.subscribe();
    
    this.userService.getAll()
    .subscribe((result) => {
      // console.log(result);
      this.users = result;
    });

  }

  ngAfterViewInit() {
    this.scrollHeight = (window.innerHeight-51)+'px';
  } 

  onSelectUser(user) {
    this.selectedUser = user;
  }

  ngOnDestroy() {

  }

}
