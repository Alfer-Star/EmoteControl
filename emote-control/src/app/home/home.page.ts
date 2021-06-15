import { StepSelectionComponent } from './step-selection/step-selection.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router,
    private modalController: ModalController
  ) {}

  navigateMovie() {
    this.presentModal();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: StepSelectionComponent,
      cssClass: 'my-custom-class',
    });
    modal.onDidDismiss().then((val) => {
      this.router.navigate(['/movie']);
    });
    return await modal.present();
  }
}
