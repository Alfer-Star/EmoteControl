import { Subtitle, SubtitleService } from './subtitle.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DescSubtitlesService extends SubtitleService {
  constructor() {
    super();
  }

  initSubs() {
    this.subs = new Array<Subtitle>();

    this.subs.push({ begin: 0, end: 10, value: '0-10000' });
    this.subs.push({
      begin: 10,
      end: 20,
      value: 'Film begin: 10000, end: 20000',
    });
    this.subs.push({
      begin: 20,
      end: 30,
      value: 'Film begin: 20000, end: 30000',
    });
    this.subs.push({
      begin: 30,
      end: 50,
      value: 'Film begin: 30000, end: 50000',
    });
    this.subs.push({
      begin: 50,
      end: 70,
      value: 'Film begin: 50000, end: 70000',
    });
    this.subs.push({
      begin: 70,
      end: 90,
      value: 'Film begin: 70000, end: 90000',
    });
    this.subs.push({
      begin: 90,
      end: 200,
      value: 'Film begin: 90000, end: 200000',
    });
    this.subs.push({
      begin: 200,
      end: 300,
      value: 'Film begin: 200000, end: 300000',
    });
  }
}
