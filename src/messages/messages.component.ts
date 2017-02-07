import { Component, OnInit, OnDestroy, ViewChild, ElementRef, trigger, state, style, transition, animate } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { AuthenticationService } from '../services/authentication.service';
import { MessageService } from '../services/message.service';
import { UserService } from '../services/user.service';

import { Message } from '../models/message.model';
import { User } from '../models/user.model';

import * as _ from 'lodash';

@Component({
  selector: 'messages-component',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  animations: [
    trigger('enterIn', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({
          'opacity': 0,
          'margin-top': '100px',
          'animation-delay': '0.2s'
        }),
        animate(500)
      ]),
      transition('* => void', [
        animate(0, style({
          'opacity': 0
        }))
      ])
    ])
  ]
})
export class MessagesComponent implements OnInit, OnDestroy {

  @ViewChild('userFilterInput')
  userFilterInput: ElementRef;

  @ViewChild('container')
  container: ElementRef;
  
  users: Array<User> = [];
  messages: Array<Message> = [];

  selectedUser:User = new User();

  scrollHeight:string;

  messageData:any = {message:''};

  messageSendingDisabled:boolean = true;

  shownMessages:any;

  fakeMessages:Array<any> = [
     {
        "id":1,
        "message":"Awesome!"
     },
     {
        "id":2,
        "message":"Hey! I wanna ask you a question, do you mind?"
     },
     {
        "id":3,
        "message":"So...wanna go out sometime?"
     },
     {
        "id":4,
        "message":"Do you like Netflix?"
     },
     {
        "id":5,
        "message":"What are you doing this Saturday?"
     },
     {
        "id":6,
        "message":"I'm bored!"
     }
  ];

  constructor(public router:Router, private auth:AuthenticationService, private userService:UserService, private messageService:MessageService) {
    
  }

  ngOnInit() {

    let eventObservable = Observable.fromEvent(this.userFilterInput.nativeElement, 'keyup')
    eventObservable.subscribe();
    
    this.messageService.getAll()
    .subscribe((result) => {
      // console.log(result);
      this.users = result;
    });

  }

  ngAfterViewInit() {
    this.scrollHeight = (window.innerHeight-30)+'px';
  }

  onSelectUser(user) {
    this.selectedUser = user;

    this.messageService.getAll()
    .subscribe((result) => {
      console.log(result);
      let messageRoom:Message = _.find(result,{'from_id':this.selectedUser.id});
      this.shownMessages = _.get(messageRoom,'messages');
      console.log(this.shownMessages);
    });

  }

  onSendMessage() {
    //Add typed message to messages list
    this.addMessageToMessagesData(999,999,this.messageData.message,false);

    this.messageSendingDisabled = true;

    //Add to the message data
    this.messageData.toUserID = this.selectedUser.id;
    this.messageData.fromUserID = this.selectedUser.id;
    this.messageData.timestamp = Date.now();

    console.log('Sending Message');
    console.log(this.messageData);

    setTimeout(() => {

      this.addMessageToMessagesData(this.selectedUser.id,this.selectedUser.id,null,true);

    },1000);

    setTimeout(() => {
    
      var _randomMessageToSend = this.fakeMessages[Math.floor(Math.random()*this.fakeMessages.length)];
      
      this.removeAllTypingMessages(this.selectedUser.id);

      this.addMessageToMessagesData(this.selectedUser.id,this.selectedUser.id,_randomMessageToSend.message,false);

    },2000);

    //Clear once its sent
    this.messageData = {};
    this.messageSendingDisabled = false;
  }

  addMessageToMessagesData(_messageUserID,_fromUserID,_message,_typing) {

    if(_message === null) {
      _message = '...';
    }

    this.shownMessages.push({
      "from_id":_fromUserID,
      "timestamp":Date.now(),
      "m":_message,
      "typing":_typing
    });

  }

  removeAllTypingMessages(_messageUserID) {
    _.remove(this.shownMessages,{'from_id':_messageUserID,'typing':true});
  }

  ngOnDestroy() {

  }

}
