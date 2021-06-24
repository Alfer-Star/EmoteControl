import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { StepSelectionComponent } from './step-selection/step-selection.component';
import { CalibrationVideoComponent } from '../calibration-video/calibration-video.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, StepSelectionComponent, CalibrationVideoComponent]
})
export class HomePageModule {}
