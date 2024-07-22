import { Injectable } from '@angular/core';
import { InfoPopupLoader } from './info-popup/info-popup-loader.interface';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DemoPopupLoaderService implements InfoPopupLoader {
  constructor() {}

  loadInfo(userId: string, infoId: string): Observable<string> {
    const del = Math.random() * 2000;
    return of(this.getContent(infoId)).pipe(delay(del));
  }

  getContent(infoId: string): string {
    switch (infoId) {
      case 'left-top-popup':
        return this.content[0];
      case 'right-top-popup':
        return this.content[1];
      case 'left-bottom-popup':
        return this.content[2];
      case 'right-bottom-popup':
        return this.content[3];
      default:
        return '<p>Not found</p>';
    }
  }

  content = [
    `
  <div>
    Hier gibt es etwas Neues! Wir haben die Funktion erweitert.
  </div>
  <ul>
  <li>Erster Punkt</li>
  <li>Zweiter Punkt</li>
  <li>Dritter Punkt</li>
  </ul>
  `,
    `
  <p>Schau mal hier! Eine neue Funktion wartet auf dich.</p>
  <a href="https://www.google.com" target="_blank">Mehr erfahren</a>
  `,
    `
  <p>Bottom left content</p>
  <p>Some more content</p>
  `,
    `
  <p>Bottom right content</p>
  <p>Some more content</p>
  `,
  ];
}
