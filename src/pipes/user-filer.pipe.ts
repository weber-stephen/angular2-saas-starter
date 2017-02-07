import { Pipe, PipeTransform } from '@angular/core';
import { Injectable } from '@angular/core';

import { User } from '../models/user.model';

import * as _ from 'lodash';

@Pipe({
    name: 'userfilter'
})
@Injectable()
export class UserFilterPipe implements PipeTransform {
    transform(items: User[], field : string, searchTerm : string): any[] {  
        if (!items) return [];
        if(searchTerm.length === 0) return items;  
        return items.filter(it => it.firstName.toUpperCase().indexOf(searchTerm.toUpperCase()) !== -1 || it.lastName.toUpperCase().indexOf(searchTerm.toUpperCase()) !== -1);
    }
}