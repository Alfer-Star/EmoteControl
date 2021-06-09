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

    this.subs.push({ begin: 0, end: 4, value: '' });
    this.subs.push({ begin: 4, end: 10, value: 'ein Wohnhaus' });
    this.subs.push({
      begin: 10,
      end: 17,
      value: 'eine Frau geht durch einen Flur',
    });
    this.subs.push({
      begin: 17,
      end: 25,
      value:
        'Sie macht das Flurlicht hinter sich aus. Sie sieht den dunklen Umriss einer Frau. Sie erschrickt. ',
    });
    this.subs.push({
      begin: 25,
      end: 33,
      value: 'Sie schaltet das Licht ein. Der Flur ist leer. Sie testet mehrfach. Der Umriss im Dunkeln bleibt.',
    });
    this.subs.push({
      begin: 33,
      end: 40,
      value: 'Plötzlich ist der Umriss sehr nah. Sie erschrickt und schaltet das Licht wieder ein.',
    });
    this.subs.push({
      begin: 40,
      end: 49,
      value: 'Die Frau fixiert den Lichtschalter im Flur mit Klebeband. Das Licht ist an.',
    });
    this.subs.push({
      begin: 49,
      end: 60,
      value: 'Sie geht legt sich ins Bett und lässt ihr Nachtlicht an. Das Flurlicht scheint durch die leicht geöffnete Tür.',
    });
    this.subs.push({
      begin: 60,
      end: 74,
      value: 'Sie hört leise Geräusche im Flur',
    });
    this.subs.push({
      begin: 74,
      end: 80,
      value: 'Das Flurlicht geht aus',
    });
    this.subs.push({
      begin: 80,
      end: 92,
      value: 'Schritte nähern sich',
    });
    this.subs.push({
      begin: 92,
      end: 95,
      value: 'Sie lugt hervor. Die Tür bewegt sich',
    });
    this.subs.push({
      begin: 95,
      end: 100,
      value: 'Sie versteckt sich wieder',
    });
    this.subs.push({
      begin: 100,
      end: 119,
      value: 'Die Nachttischlampe flackert',
    });
    this.subs.push({
      begin: 119,
      end: 125,
      value: 'Sie streckt die Hand aus dem Bett und tastet nach dem Stecker',
    });
    this.subs.push({
      begin: 125,
      end: 130,
      value: 'Sie richtet den Stecker, die Lampe scheint hell, sie wartet unter der Decke ab',
    });
    this.subs.push({
      begin: 130,
      end: 140,
      value: 'Sie hört ein Klicken, und lugt heraus. Das Flurlicht ist wieder an',
    });
    this.subs.push({
      begin: 140,
      end: 149,
      value: 'Sie hört etwas und sieht sich um',
    });
    this.subs.push({
      begin: 149,
      end: 155,
      value: 'Sie dreht sich und sieht neben ihrem Bett eine lauernde Frau mit weißen Augen kurz bevor diese das Licht ausschaltet…',
    });
    this.subs.push({
      begin: 155,
      end: 161,
      value: 'Abspann',
    });
  }
}
