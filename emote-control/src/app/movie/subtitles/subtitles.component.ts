import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtitles',
  templateUrl: './subtitles.component.html',
  styleUrls: ['./subtitles.component.scss'],
})
export class SubtitlesComponent implements OnInit {

  @Input() currentSub: string;

  constructor() { }

  ngOnInit() {}

}
