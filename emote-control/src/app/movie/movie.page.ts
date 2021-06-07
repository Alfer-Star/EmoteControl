import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';


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

  videoPath = './assets/movies/sample-mp4-file.mp4';

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.myVideo.nativeElement.addEventListener('pause', ()=> (this.videoPaused=!this.videoPaused));
    this.myVideo.nativeElement.addEventListener('play', ()=> (this.videoPaused=!this.videoPaused));
    this.myVideo.nativeElement.addEventListener('volumechange', ()=> {});
    this.myVideo.nativeElement.addEventListener('timeupdate', ()=> {});
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
}
