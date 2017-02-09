import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import {LocalStorageService, SessionStorageService} from 'ng2-webstorage';

import * as _ from 'lodash';

@Injectable()
export class SearchService {

    constructor(private http: Http, private storage:LocalStorageService) { }

    get(searchTerm) {
        return this.http.get('/assets/api/navigation.json', this.jwt()).map((response: Response) => response.json());
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