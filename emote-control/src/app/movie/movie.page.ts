import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {

  @ViewChild('video') myVideo: ElementRef;

  videoPath = './assets/movies/sample-mp4-file.mp4';

  constructor() { }

  ngOnInit() {
  }

  playVideo(){
    this.myVideo.nativeElement.play();
  }
stopVideo(){
    this.myVideo.nativeElement.pause();
  }

}
