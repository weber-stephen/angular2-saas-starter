import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import {LocalStorageService, SessionStorageService} from 'ng2-webstorage';

import { Message } from '../models/message.model';

@Injectable()
export class MessageService {

    constructor(private http: Http, private storage:LocalStorageService) { }

    getAll() {
        return this.http.get('/assets/api/messages.json', this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods
    private jwt() {
        // create authorization header with jwt token
        let currentUser = this.storage.retrieve('currentUser');
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}