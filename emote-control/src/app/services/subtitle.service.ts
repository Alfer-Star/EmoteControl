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

     this.subs.push({
      begin: 0,
      end: 6 ,
      value: 'die Lampe summt',
    });
 this.subs.push({
      begin: 6,
      end:  23 ,
      value: 'spannende Musik',
    });
 this.subs.push({
      begin: 23,
      end: 47,
      value: ' es läuft Musik aus dem Spiel',
    });
 this.subs.push({
      begin: 48,
      end: 49,
      value: ' ein Klopfen',
    });
 this.subs.push({
      begin: 49 ,
      end: 50 ,
      value: '',
    });
 this.subs.push({
      begin: 50 ,
      end: 58 ,
      value: 'es läuft Musik aus dem Spiel',
    });
 this.subs.push({
      begin: 58 ,
      end: 59 ,
      value: 'Ein Klopfen',
    });
 this.subs.push({
      begin: 59,
      end:  71 ,
      value: 'spannende Musik',
    });
 this.subs.push({
      begin: 71 ,
      end: 72 ,
      value: 'spannende Musik. Das Bett knarzt',
    });
 this.subs.push({
      begin: 72 ,
      end: 82 ,
      value: 'spannende Musik',
    });
 this.subs.push({
      begin: 82 ,
      end: 85,
      value: ' es läuft Musik aus dem Spiel',
    });
 this.subs.push({
      begin: 85 ,
      end: 87,
	  value: '',
    });
 this.subs.push({
      begin: 87 ,
      end: 89 ,
      value: 'das Geräusch einer sich öffnenen Schublade',
    });
 this.subs.push({
      begin: 89 ,
      end: 92,
	  value: '',
    });
 this.subs.push({
      begin: 92,
      end: 93 ,
      value: 'das Geräusch einer sich schließenden Schublade',
    });
 this.subs.push({
      begin: 93 ,
      end: 112 ,
      value: 'es läuft leise Musik aus dem Spiel',
    });
 this.subs.push({
      begin: 112 ,
      end: 113 ,
      value: 'leichtes lachen',
    });
 this.subs.push({
      begin: 113 ,
      end: 125 ,
      value: 'es läuft leise Musik aus dem Spiel',
    });
 this.subs.push({
      begin: 125 ,
      end: 146,
      value: ' bedrohliche Musik',
    });
 this.subs.push({
      begin: 146 ,
      end: 149 ,
      value: 'bedrohliches Lachen',
    });
 this.subs.push({
      begin: 149 ,
      end: 158 ,
      value: 'Knarzende Dielenbretter ',
    });
 this.subs.push({
      begin: 158 ,
      end: 161,
      value: '',
    });
 this.subs.push({
      begin: 161 ,
      end: 162 ,
      value: 'Klicken',
    });
 this.subs.push({
      begin: 162 ,
      end: 167 ,
      value: ' bedrohliche Musik',
    });
 this.subs.push({
      begin: 167 ,
      end: 172 ,
      value: 'das Geräusch einer sich öffnenden und schließenden Schublade',
    });
 this.subs.push({
      begin: 172 ,
      end: 174 ,
      value: 'bedrohliches Lachen',
    });
 this.subs.push({
      begin: 174 ,
      end: 182 ,
      value: 'bedrohliche Musik',
    });
 this.subs.push({
      begin: 182 ,
      end: 184 ,
      value: 'das Geräusch einer sich öffnenden und schließenden Schublade',
    });
 this.subs.push({
      begin: 184 ,
      end: 185 ,
      value: 'Klack',
    });
 this.subs.push({
      begin: 185 ,
      end:  189 ,
      value: 'bedrohliche Musik',
    });
 this.subs.push({
      begin: 189 ,
      end: 191 ,
      value: 'Knarzen',
    });
 this.subs.push({
      begin: 192 ,
      end: 192 ,
      value: 'Klick',
    });
 this.subs.push({
      begin: 192 ,
      end: 210 ,
      value: 'bedrohliche Musik',
    });
    // Philipp
    this.subs.push({
      begin: 210,
      end: 226,
      value: '',
    });
    this.subs.push({
      begin: 226,
      end: 232,
      value: 'Fußboden knarzt',
    });
    this.subs.push({
      begin: 232,
      end: 239,
      value: 'Notification Sound',
    });
    this.subs.push({
      begin: 339,
      end: 348,
      value: 'Tür knarzt',
    });
    this.subs.push({
      begin: 248,
      end: 259,
      value: '',
    });
    this.subs.push({
      begin: 259,
      end: 270,
      value: 'aufschlagende Tür und lautes Atmen',
    });
    this.subs.push({
      begin: 270,
      end: 276,
      value: 'Fußboden knarzt  und lautes Atmen',
    });
    this.subs.push({
      begin: 276,
      end: 282,
      value: 'quitschendes Bett  und lautes Atmen',
    });
    this.subs.push({
      begin: 282,
      end: 288,
      value: 'lautes Atmen',
    });
    this.subs.push({
      begin: 288,
      end: 299,
      value: '',
    });
    this.subs.push({
      begin: 299,
      end: 310,
      value: 'Tür knarzt',
    });
    this.subs.push({
      begin: 310,
      end: 314,
      value: 'klicken der Lampe',
    });
    this.subs.push({
      begin: 314,
      end: 317,
      value: 'schreien des Monsters',
    });
    this.subs.push({
      begin: 317,
      end: 320,
      value: 'Notification Sound',
    });
    this.subs.push({
      begin: 320,
      end: 359,
      value: '',
    });
    this.subs.push({
      begin: 359,
      end: 363,
      value: 'klicken',
    });
    this.subs.push({
      begin: 363,
      end: 375,
      value: 'Atmen',
    });
    this.subs.push({
      begin: 375,
      end: 377,
      value: 'schreien des Monsters',
    });
    this.subs.push({
      begin: 377,
      end: 390,
      value: 'bedrohliche Musik',
    });
    this.subs.push({
      begin: 390,
      end: 393,
      value: 'poltern',
    });
    this.subs.push({
      begin: 393,
      end: 401,
      value: 'Countdown sound',
    });
    this.subs.push({
      begin: 401,
      end: 404,
      value: 'leises Lachen',
    });
    this.subs.push({
      begin: 404,
      end: 406,
      value: 'Countdown sound',
    });

  }
  
}

export interface Subtitle {
  begin: number;
  end: number;
  value: string;
}
