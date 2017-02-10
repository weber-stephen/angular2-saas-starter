import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { TableService } from '../services/table.service';

@Component({
  selector: 'tables-component',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit, OnDestroy {
  
  temp:any = [];
  rows:any = [];
  expanded = {};
  selected = [];

  constructor(public router:Router, private tableService:TableService) {
    
  }

  ngOnInit() {
    
    this.tableService.get()
    .then((result) => {
      // console.log(result);
      this.temp = result;
      this.rows = this.temp;
    });

  }

  updateFilter(event) {
    let val = event.target.value;

    // filter our data
    let temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val || d.gender.toLowerCase().indexOf(val) !== -1;
    });

    // update the rows
    this.rows = temp;
  }

  onPage(event) {

  }

  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);
  }

  onActivate(event) {
    console.log('Activate Event', event);
  }

  ngOnDestroy() {

  }

}
