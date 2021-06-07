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

  videoPaused = false;

  videoPath = './assets/movies/lights-out-whos-there-film-challenge-2013.mp4';

  currentSub: string;
  subActive = false;

  constructor(private subtitleService: SubtitleService) {}

  ngOnInit() {
    const observer = this.subtitleService.getSubObserver();
    observer.subscribe((sub) => {
      if (this.subActive) {
        this.currentSub = sub;
      }
    });
  }

  ngAfterViewInit(): void {
    this.myVideo.nativeElement.addEventListener(
      'pause',
      () => (this.videoPaused = !this.videoPaused)
    );
    this.myVideo.nativeElement.addEventListener(
      'play',
      () => (this.videoPaused = !this.videoPaused)
    );
    this.myVideo.nativeElement.addEventListener('volumechange', () => {});
    this.myVideo.nativeElement.addEventListener('timeupdate', () => {});
  }

  playVideo() {
    this.myVideo.nativeElement.play();
  }
  stopVideo() {
    this.myVideo.nativeElement.pause();
  }

  muteVideo() {
    this.myVideo.nativeElement.muted = !this.myVideo.nativeElement.muted;
  }

  showSubtitles() {
    this.currentSub = 'Subtitles';
    // Logic setting Subtitles
    // See also Listener timeupdate
  }

  removeSubtitles() {
    this.currentSub = undefined;
  }
}
