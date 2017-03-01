import { Component, NgModule, OnInit, OnDestroy, Output, ViewChild, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'dynamic-modal-component',
  templateUrl: './dynamic-modal.component.html',
  styleUrls: ['./dynamic-modal.component.scss'],
  exportAs: 'child'
})
export class DynamicModalComponent implements OnInit, OnDestroy {
  @ViewChild('lgModal') lgModal;

  @Output()
  clickEvent: EventEmitter<any> = new EventEmitter<any>();

	data:any;

	constructor() {

	}

	ngOnInit() {
		
	}

  show(data){
  	this.data = data;
    this.lgModal.show(); 
  }

  hide(){
    this.lgModal.hide();
  }

	onClick() {
		this.clickEvent.emit(this.data);
	}

	ngOnDestroy() {

	}

}
