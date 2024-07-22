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
    return of(`<p>User ${userId} has requested info ${infoId}</p>`).pipe(
      delay(del)
    );
  }
}
