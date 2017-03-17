import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {LocalStorageService, SessionStorageService} from 'ng2-webstorage';

@Injectable()
export class AuthenticationService {

    constructor(private http: Http, private storage:LocalStorageService) { }

    login(username: string, password: string) {
        return this.http.post('./api/authenticate', JSON.stringify({ username: username, password: password }))
        .map((response: Response) => {
            // login successful if there's a jwt token in the response
            let user = response.json();
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                this.storage.store('currentUser',user);
            }
        });
    }

    loginFake(username: string, password: string) {
        return new Promise((resolve, reject) => {
            var user = {
                username:'StephenWeber',
                first_name:'Stephen',
                last_name:'Weber'
            };
            this.storage.store('currentUser',user);
            return resolve(user);
        });
    }

    getUser() {
        return this.storage.retrieve('currentUser');
    }

    logout() {
        // remove user from local storage to log user out
        // localStorage.removeItem('currentUser');
        this.storage.clear('currentUser');
    }
}