import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ControlServiceService {
  fullControl = false;

  mediumControl = false;

  private controlIndex;

  constructor() {}

  getControlIndex() {
    return this.controlIndex;
  }

  nextControlIndex() {
    if (this.controlIndex < 2) {
      this.controlIndex++;
    } else {
      this.controlIndex = 0;
    }
    switch (this.controlIndex) {
      case 1:
        this.mediumControl = true;
        this.fullControl = false;
        return 'Medium Control';
      case 2:
        this.mediumControl = false;
        this.fullControl = true;
        return 'Full Control';
      default:
        this.mediumControl = false;
        this.fullControl = false;
        return 'No Control';
    }
  }
}
