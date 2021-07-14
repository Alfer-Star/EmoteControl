import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-congrat-modal',
  templateUrl: './congrat-modal.component.html',
  styleUrls: ['./congrat-modal.component.scss']
})
export class CongratModalComponent implements OnInit {

  constructor(protected modal: ModalController) { }

  ngOnInit(): void {
  }

close(){
  this.modal.dismiss();
}

}
