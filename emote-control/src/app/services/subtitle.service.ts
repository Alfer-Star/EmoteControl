import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubtitleService {
  protected subs: Subtitle[];

  protected lastTimeIndex: number;
  protected lastTime: number;

  constructor() {
    this.initSubs();
  }

  /**
   * Call to check is new Sub
   *
   * @param time is in sec
   */
  nextSub(time: number) {
    this.lastTime = time;
    console.log(this.lastTimeIndex);
    console.log(this.subs.length);
    if (
      this.lastTimeIndex &&
      this.lastTimeIndex > 0 &&
      this.lastTimeIndex < this.subs.length &&
      Math.abs(time - this.lastTime) < 1
    ) {
      const sub = this.subs[this.lastTimeIndex];
      this.lastTimeIndex = this.checkSub(sub, time)
        ? this.lastTimeIndex
        : this.lastTimeIndex + 1;
    } else {
      this.lastTimeIndex = this.subs.findIndex((value) =>
        this.checkSub(value, time)
      );
    }
    return this.lastTimeIndex || this.lastTimeIndex < this.subs.length
      ? this.subs[this.lastTimeIndex].value
      : 'No Sub';
  }

  protected checkSub(sub: Subtitle, time: number) {
    return sub.begin <= time && sub.end >= time;
  }

  protected initSubs() {
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

export interface Subtitle {
  begin: number;
  end: number;
  value: string;
}
