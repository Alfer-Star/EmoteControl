import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-selection',
  templateUrl: './step-selection.component.html',
  styleUrls: ['./step-selection.component.scss'],
})
export class StepSelectionComponent implements OnInit {
  items = ['Angsthase', 'Abenteurer', 'Horror Veteran'];
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  onClick(){
    this. dismiss();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true
    });
  }
}
