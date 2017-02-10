import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { SearchService } from '../../services/search.service';

import { ClickOutsideDirective } from './clickinside.directive';

import * as _ from 'lodash';

@Component({
  selector: 'search-autocomplete-component',
  templateUrl: './search-autocomplete.component.html',
  styleUrls: ['./search-autocomplete.component.scss']
})
export class SearchAutocompleteComponent implements OnInit, OnDestroy {

    @ViewChild('userFilterInput')
    userFilterInput: ElementRef;
    
    searchForm:FormGroup;
    searchTerm:string = '';
    searchResults:Array<any> = [];

    showSuggestions:boolean = false;
  
    constructor(public router:Router, private formBuilder: FormBuilder, private searchService:SearchService) {

    }

    ngOnInit() {

        this.showSuggestions = false;

        this.searchForm = this.formBuilder.group({
          searchTerm: ['', Validators.required]
        });

        let keyupObservable = Observable.fromEvent(this.userFilterInput.nativeElement, 'keyup')
        keyupObservable.subscribe(() => {

            this.showSuggestions = true;

            let searchableSearchTerm = this.searchForm.controls['searchTerm'].value.toLowerCase();
            console.log(searchableSearchTerm);

            this.searchService.get(searchableSearchTerm)
            .subscribe((result) => {
                this.searchResults = _.filter(result,(o) => {
                    return _.get(o,'label').toLowerCase().indexOf(searchableSearchTerm) != -1;
                });
            });

        });

        let focusObservable = Observable.fromEvent(this.userFilterInput.nativeElement, 'focus')
        focusObservable.subscribe(() => {
            this.showSuggestions = true;
        });

    }

    close() {
        this.showSuggestions = false;
    }

    onSelectedSearchResult(e,searchResult) {
        this.router.navigateByUrl(searchResult.route);
        this.showSuggestions = false;
    }

    ngOnDestroy() {

    }

}
