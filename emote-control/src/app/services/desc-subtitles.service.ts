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

    
 this.subs.push({
      begin: 0 ,
      end: 5 ,
      value: 'Intro',
    });
 this.subs.push({
      begin: 5,
      end:  8,
      value: 'Eine Nachtischlampe leuchtet',
    });
 this.subs.push({
      begin: 8,
      end:  22,
      value: ' Die Kamera schwenkt durch das dunkle Zimmer richtung Bett',
    });
 this.subs.push({
      begin: 22,
      end: 32 ,
      value: 'Eine Frau liegt mit einer Switch auf dem Bett',
    });
 this.subs.push({
      begin: 32,
      end: 34 ,
      value: '(Im Spiel) Eine Figur läuft durch ein Schlafzimmer',
    });
 this.subs.push({
      begin: 34,
      end: 39,
      value: '(Im Spiel) Die Figur legt sich auf das Bett',
    });
 this.subs.push({
      begin: 39 ,
      end: 41 ,
      value: 'Die Frau im Bett',
    });
 this.subs.push({
      begin: 41,
      end:  44 ,
      value: '(Im Spiel) Die Figur läuft durch das Zimmer',
    });
 this.subs.push({
      begin: 44 ,
      end: 47,
      value: ' Die Figur öffnet die Kommode',
    });
 this.subs.push({
      begin: 47,
      end: 48 ,
      value: 'Ein Klopfen',
    });
 this.subs.push({
      begin: 48,
      end: 54 ,
      value: 'Die Frau ist irritiert und schaut zur Zimmertür',
    });
 this.subs.push({
      begin: 54,
      end: 57 ,
      value: '(Im Spiel) Die Figur entscheided sich nicht umzuziehen',
    });
 this.subs.push({
      begin: 57,
      end: 58 ,
      value: 'Ein Klopfen',
    });
 this.subs.push({
      begin: 58,
      end: 62 ,
      value: 'Die Frau ist irritiert und wirkt nervös',
    });
 this.subs.push({
      begin: 62,
      end: 72 ,
      value: 'Sie stemmt sich auf und schaut zur Schublade ihrer Kommode',
    });
 this.subs.push({
      begin: 72,
      end: 82,
      value: ' Die Schublade im Fokus',
    });
 this.subs.push({
      begin: 83,
      end: 85 ,
      value: '(Im Spiel) Die Figur öffnet die Schublade',
    });
 this.subs.push({
      begin: 84,
      end: 88 ,
      value: 'Die Schublade der Kommode öffnet sich laut ',
    });
 this.subs.push({
      begin: 89,
      end: 92 ,
      value: 'Die Frau guckt entsetzt',
    });
 this.subs.push({
      begin: 92,
      end: 94 ,
      value: 'Die Schublade schließt sich wieder',
    });
 this.subs.push({
      begin: 95 ,
      end: 101 ,
      value: 'Die Frau ist verängtist und schaut ich nervös um',
    });
 this.subs.push({
      begin: 101,
      end: 102 ,
      value: 'Die Nachtischlampe leuchtet',
    });
 this.subs.push({
      begin: 102,
      end: 106 ,
      value: 'Die Frau spielt weiter',
    });
 this.subs.push({
      begin: 106,
      end:  110,
      value: '(Im Spiel) Die Figur läuft zu anderen Zimmerecke und schalet einen Bildschirm aus',
    });
 this.subs.push({
      begin: 110,
      end: 111 ,
      value: 'Die Lampe geht aus',
    });
 this.subs.push({
      begin: 111,
      end: 118 ,
      value: 'Die Frau lacht belustigt und spielt weiter',
    });
 this.subs.push({
      begin: 118 ,
      end: 120,
      value: '(Im Spiel) Die Figur rennt zum Bett und schaltet eine Lampe aus',
    });
 this.subs.push({
      begin: 120,
      end: 121 ,
      value: 'Die Lampe neben dem Bett geht aus',
    });
 this.subs.push({
      begin: 121,
      end: 125 ,
      value: 'Die Frau lacht',
    });
 this.subs.push({
      begin: 125 ,
      end: 137 ,
      value: 'Die Frau starrt erschrocken auf den Bildschirm. Die Kamera zoomt näher heran',
    });
 this.subs.push({
      begin: 137 ,
      end: 142 ,
      value: '(Im Spiel) Eine erschreckende Gestalt taucht in der Zimmertür auf',
    });
 this.subs.push({
      begin: 142 ,
      end:  146 ,
      value: 'Die Frau starrt erschrocken auf den Bildschirm',
    });
 this.subs.push({
      begin: 146 ,
      end:  149,
      value: '(Im Spiel) Die Gestalt lacht',
    });
 this.subs.push({
      begin: 149 ,
      end: 155 ,
      value: 'Bretter knarzen. Die Frau guckt erschrocken',
    });
 this.subs.push({
      begin: 155 ,
      end: 158 ,
      value: 'Die Zimmertür. Ein Knarzen dringt durch die Tür herein',
    });
 this.subs.push({
      begin: 158 ,
      end: 161 ,
      value: 'Die Frau ist verängstigt',
    });
 this.subs.push({
      begin: 161,
      end:  162 ,
      value: 'Das Licht am Bett geht wieder an',
    });
 this.subs.push({
      begin: 162 ,
      end: 166 ,
      value: 'Die Frau setzt sich auf und legt sich dann hin',
    });
 this.subs.push({
      begin: 167 ,
      end: 172 ,
      value: 'Ein Geräuch von einer sich öffnenenden und schließenden Schublade',
    });
 this.subs.push({
      begin: 172 ,
      end: 174 ,
      value: 'Ein grausames Lachen',
    });
 this.subs.push({
      begin: 174 ,
      end: 182 ,
      value: 'Die Frau liegt im Bett und versucht die Geräusche zu ignorieren',
    });
 this.subs.push({
      begin: 182,
      end: 184 ,
      value: 'Ein Klopfen',
    });
 this.subs.push({
      begin: 184 ,
      end: 189 ,
      value: 'Die Lampe am Bett geht wieder aus. Die Frau schreckt hoch',
    });
 this.subs.push({
      begin: 189 ,
      end:  194 ,
      value: 'Gruselige Geräusche. Die Frau dreht sich zu Nachtischlampe und schaltet das Licht wieder an',
    });
 this.subs.push({
      begin: 194 ,
      end: 208 ,
      value: 'Sie schaut sich verängstigt im Zimmer um.',
    });
 this.subs.push({
      begin: 208,
      end: 210 ,
      value: 'Die Switch liegt umgedreht auf dem Bett',
    });
// Philipp
this.subs.push({
  begin: 210,
  end: 225,
  value: 'Die Frau hebt die switch auf und schaut in das Spiel',
});
this.subs.push({
  begin: 225,
  end: 232,
  value: 'Die Frau schaut von der Switch auf',
});
this.subs.push({
  begin: 232,
  end: 239,
  value: '(Im Spiel) ZoZo fragt: "Lässt du mich rein?"',
});
this.subs.push({
  begin: 339,
  end: 348,
  value: 'Die Frau schaut von der Switch auf und die Tür bewegt sich',
});
this.subs.push({
  begin: 250,
  end: 259,
  value: '(Im Spiel) Sie beantwortet die Frage mit nein',
});
this.subs.push({
  begin: 259,
  end: 262,
  value: '(Im Spiel) am Türrahmen erscheint eine Hand',
});
this.subs.push({
  begin: 262,
  end: 271,
  value: 'Die Tür schlägt auf und die Frau weicht nach hinten',
});
this.subs.push({
  begin: 271,
  end: 275,
  value: 'Die Bettdecke bewegt sich',
});
this.subs.push({
  begin: 275,
  end: 293,
  value: 'Die Frau klettert rückwärts vom Bett herunter und versteckt sich dahinter',
});
this.subs.push({
  begin: 293,
  end: 295,
  value: 'Die Frau schuat wieder auf die switch',
});
this.subs.push({
  begin: 295,
  end: 300,
  value: '(Im Spiel) ZoZo sagt: "Nicht blinzeln, ich bin schüchtern."',
});
this.subs.push({
  begin: 300,
  end: 305,
  value: 'Die Frau schaut nach oben',
});
this.subs.push({
  begin: 305,
  end: 312,
  value: 'Auf dem Bett sitzt etwas mit dem Kopf unter der Decke',
});
this.subs.push({
  begin: 312,
  end: 314,
  value: '(Im Spiel) ZoZo fragt: "Lässt du mich raus?"',
});
this.subs.push({
  begin: 314,
  end: 317,
  value: 'Das Licht geht aus und die Decke kommt auf die Frau zu',
});
this.subs.push({
  begin: 317,
  end: 320,
  value: 'Das Licht geht wieder an',
});
this.subs.push({
  begin: 320,
  end: 355,
  value: 'Das Bett ist wieder leer',
});
this.subs.push({
  begin: 355,
  end: 373,
  value: 'Die Frau schaltet im Spiel das Licht aus, in der Realität bleibt es aber an',
});
this.subs.push({
  begin: 373,
  end: 377,
  value: 'Das Monster sitzt auf dem Bett und stürzt auf die Frau',
});
this.subs.push({
  begin: 377,
  end: 392,
  value: 'Abspann',
});
    
  }
}
