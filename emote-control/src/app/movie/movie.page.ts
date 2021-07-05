import { ModalController } from '@ionic/angular';
import { DescSubtitlesService } from './../services/desc-subtitles.service';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { SubtitleService } from '../services/subtitle.service';
import { CongratModalComponent } from './congrat-modal/congrat-modal.component';
import { ControlServiceService } from '../services/control-service.service';

/**
 * From here
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs
 * https://developer.mozilla.org/de/docs/Web/HTML/Element/video
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
 */
@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit, AfterViewInit {
  @ViewChild('video') myVideo: ElementRef;

  //videoPath = './assets/movies/sample-mp4-file.mp4';

  videoPath = "./assets/movies/DON'T PEEK -  Horror Short.mp4";

  videoPaused = false;

  currentSub = 'Subtitles off';
  subActive = false;
  descSubActive = false;

  videoIsBlanked = false;

  volume = 1;

  noModalSchown = true;

  /**Skips are Min 0:41, 1:22 and 2:30 for horrorfilm */
  skips = [41, 60 + 22, 120 + 30];

  fullControl: boolean;
  mediumControl: boolean;

  scareReduxIndex = 0;
  scareReduxListUp = [
    'Low Volume',
    'Mute',
    'Show Subtitles',
    'Blank Video',
    'Pause',
    'Skip Scene',
  ];
  scareReduxUp: string;
  scareReduxListDown = [
    'Nothing',
    'Normal Volume',
    'No Mute',
    'Remove Subtitles',
    'Unblank Video',
    'Play',
  ];
  scareReduxDown: string;

  constructor(
    private subtitleService: SubtitleService,
    private descSubtitlesService: DescSubtitlesService,
    private modalController: ModalController,
    private control: ControlServiceService
  ) {}

  ngOnInit() {
    this.fullControl = !this.control.fullControl;
    this.mediumControl = !this.control.mediumControl;
    this.changeReductionControl(this.scareReduxIndex);
  }

  ngAfterViewInit(): void {
    // EventListener
    this.myVideo.nativeElement.addEventListener(
      'pause',
      () => (this.videoPaused = !this.videoPaused)
    );
    this.myVideo.nativeElement.addEventListener(
      'play',
      () => (this.videoPaused = !this.videoPaused)
    );
    this.myVideo.nativeElement.addEventListener('volumechange', () => {
      this.volume = this.myVideo.nativeElement.volume;
    });
    this.myVideo.nativeElement.addEventListener('timeupdate', () => {
      // Show Congrats Modal on Abspan
      if (this.noModalSchown && this.myVideo.nativeElement.currentTime > 152) {
        this.noModalSchown = false;
        this.presentModal();
      }
      // Subtitles
      if (this.descSubActive) {
        this.currentSub = this.descSubtitlesService.nextSub(
          this.myVideo.nativeElement.currentTime
        );
      } else if (this.subActive) {
        this.currentSub = this.subtitleService.nextSub(
          this.myVideo.nativeElement.currentTime
        );
      }
    });
  }

  playVideo() {
    this.myVideo.nativeElement.play();
  }
  stopVideo() {
    this.myVideo.nativeElement.pause();
  }

  changeVolume(multiplikator: number) {
    const newVolume = this.myVideo.nativeElement.volume + 0.1 * multiplikator;
    if (newVolume >= 1) {
      this.myVideo.nativeElement.volume = 1;
    } else if (newVolume <= 0) {
      this.myVideo.nativeElement.volume = 0;
    } else {
      this.myVideo.nativeElement.volume = newVolume;
    }
    this.volume = this.myVideo.nativeElement.volume;
  }

  lowVolumeMode() {
    if ((this.myVideo.nativeElement.volume > 0, 2)) {
      this.myVideo.nativeElement.volume = 0.1;
    } else {
      this.changeVolume(10);
    }
  }

  blankVideo() {
    this.videoIsBlanked = !this.videoIsBlanked;
    this.descSubActive = !this.descSubActive;
  }

  muteVideo() {
    this.myVideo.nativeElement.muted = !this.myVideo.nativeElement.muted;
  }

  showSubtitles() {
    this.subActive = !this.subActive;
  }

  skipScene() {
    if (this.myVideo.nativeElement.currentTime < this.skips[0]) {
      this.myVideo.nativeElement.currentTime = this.skips[0];
    } else if (this.myVideo.nativeElement.currentTime < this.skips[1]) {
      this.myVideo.nativeElement.currentTime = this.skips[1];
    } else if (this.myVideo.nativeElement.currentTime < this.skips[2]) {
      this.myVideo.nativeElement.currentTime = this.skips[2];
    } else {
      this.myVideo.nativeElement.currentTime =
        this.myVideo.nativeElement.duration;
    }
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: CongratModalComponent,
      cssClass: 'my-custom-class',
    });
    modal.onDidDismiss().then((val) => {});
    return await modal.present();
  }

  scareReductioDown() {
    this.scareReduxIndex -= 1;
    this.changeReductionControl(this.scareReduxIndex);
  }

  scareReductioUp() {
    this.scareReduxIndex += 1;
    this.changeReductionControl(this.scareReduxIndex);
  }
  changeReductionControl(index: number) {
    this.scareReduxDown = this.scareReduxListDown[index];
    this.scareReduxUp = this.scareReduxListUp[index];

    switch (index) {
      case 1:
        this.changeVolume(-1);
        break;
      case 2:
        this.muteVideo();
        break;
      case 3:
        this.showSubtitles();
        break;
      case 4:
        this.blankVideo();
        break;
      case 5:
        if (this.videoPaused) {
          this.playVideo();
        } else {
          this.stopVideo();
        }
        break;
      case 6:
        this.skipScene();
        break;

      default:
        break;
    }
  }
}
