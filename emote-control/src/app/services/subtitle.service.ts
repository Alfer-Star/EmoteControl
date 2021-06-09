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

    this.subs.push({ begin: 0, end: 4, value: '' });
    this.subs.push({ begin: 4, end: 10, value: 'Regen' });
    this.subs.push({ begin: 10, end: 17, value: '' });
    this.subs.push({
      begin: 17,
      end: 40,
      value: 'Lichtschalter klickt',
    });
    this.subs.push({
      begin: 40,
      end: 49,
      value: 'Klebeband knarzt',
    });
    this.subs.push({
      begin: 49,
      end: 58,
      value: 'Laken rascheln',
    });
    this.subs.push({
      begin: 58,
      end: 64,
      value: 'leise Geräusche',
    });
    this.subs.push({
      begin: 64,
      end: 72,
      value: 'Knarzen',
    });
    this.subs.push({
      begin: 72,
      end: 74,
      value: 'ängstliches Wimmern',
    });
    this.subs.push({
      begin: 74,
      end: 76,
      value: 'Klick',
    });
    this.subs.push({
      begin: 76,
      end: 80,
      value: 'schnelle tappende Schritte',
    });
    this.subs.push({
      begin: 80,
      end: 94,
      value: 'schnelle tappende Schritte verstummen',
    });
    this.subs.push({
      begin: 90,
      end: 94,
      value: '',
    });
    this.subs.push({
      begin: 94,
      end: 96,
      value: 'Schreckenslaut, Wimmern',
    });
    this.subs.push({
      begin: 96,
      end: 100,
      value: 'Schreckenslaut, Wimmern',
    });
    this.subs.push({
      begin: 100,
      end: 125,
      value: 'Lampe summt',
    });
    this.subs.push({
      begin: 125,
      end: 130,
      value: 'Stecker klackt',
    });
    this.subs.push({
      begin: 130,
      end: 140,
      value: 'Lichtschalter klicken',
    });
    this.subs.push({
      begin: 140,
      end: 148,
      value: '',
    });
    this.subs.push({
      begin: 148,
      end: 149,
      value: 'leises Fauchen',
    });
    this.subs.push({
      begin: 149,
      end: 152,
      value: 'klick',
    });
    this.subs.push({
      begin: 152,
      end: 161,
      value: 'Abspann',
    });
  }
}

export interface Subtitle {
  begin: number;
  end: number;
  value: string;
}
