import { DescSubtitlesService } from './../services/desc-subtitles.service';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { SubtitleService } from '../services/subtitle.service';

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

  videoPath = './assets/movies/sample-mp4-file.mp4';

  //videoPath = './assets/movies/lights-out-whos-there-film-challenge-2013.mp4';

  videoPaused = false;

  currentSub = 'Subtitles off';
  subActive = false;
  descSubActive = false;

  videoIsBlanked = false;

  volume = 1;

  constructor(
    private subtitleService: SubtitleService,
    private descSubtitlesService: DescSubtitlesService
  ) {}

  ngOnInit() {}

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
      console.log('time:' + this.myVideo.nativeElement.currentTime);
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

  changeVolume(multiplikator: 1 | -1) {
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
}
