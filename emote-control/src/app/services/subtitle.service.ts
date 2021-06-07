import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubtitleService {
  private currentSub: BehaviorSubject<string> = new BehaviorSubject<string>('');

  private subs: Map<number, string> = new Map<number, string>();

  constructor() {
    this.initSubs();
  }

  /**
   *
   * Call to check is new Sub
   * @param time is in ms
   */
  nextSub(time: number) {
    if (this.subs.has(time)) {
      return this.subs.get(time);
    }
  }

  initSubs() {
    this.subs.set(0, 'Film startet');
    this.subs.set(1000, 'erste Film Sekunde');
    // this.subs.set(zeit in ms,'Untertitel');
  }

  getSubObserver(): Observable<string> {
    return this.currentSub.asObservable();
  }
}
