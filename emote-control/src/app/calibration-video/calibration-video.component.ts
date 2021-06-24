import { Router } from '@angular/router';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-calibration-video',
  templateUrl: './calibration-video.component.html',
  styleUrls: ['./calibration-video.component.scss'],
})
export class CalibrationVideoComponent implements AfterViewInit {
  @ViewChild('video') myVideo: ElementRef;

  videoPath = './assets/movies/sample-mp4-file.mp4';

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    // EventListener
    this.myVideo.nativeElement.addEventListener('timeupdate', () => {
      if (this.myVideo.nativeElement.currentTime > 152) {
      }
    });
  }
}
