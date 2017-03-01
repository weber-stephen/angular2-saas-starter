import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';

import { DynamicModalComponent } from './dynamic-modal/dynamic-modal.component';

@Component({
  selector: 'modals-component',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit, OnDestroy {
  
  @ViewChild('c') dynamicModal;

	dataGoingToDialog:any = {'title':'Modal Title','body':'This is the body of the modal. Click me to close the dialog and send the data back to the modal page.'};

	dataFromDialog:any;

	constructor() {

	}

	ngOnInit() {
		
	}

	onShowModal() {
		this.dynamicModal.show(this.dataGoingToDialog);
	}

	onModalClickEvent(data:any) {
		this.dataFromDialog = data;
		this.dynamicModal.hide();
	}

	ngOnDestroy() {

	}

}
