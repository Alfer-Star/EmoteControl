import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  textFile = null;

  constructor() { }

   
/*       create.addEventListener('click', function () {
        var link = document.getElementById('downloadlink');
        link.href = makeTextFile(textbox.value);
        link.style.display = 'block';
      }, false); */

    makeTextFile(text: string) {
      var data = new Blob([text], {type: 'text/plain'});
  
      // If we are replacing a previously generated file we need to
      // manually revoke the object URL to avoid memory leaks.
      if (this.textFile !== null) {
        window.URL.revokeObjectURL(this.textFile);
      }
  
      this.textFile = window.URL.createObjectURL(data);
  
      return this.textFile;
    };
}
