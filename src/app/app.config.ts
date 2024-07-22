import {
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { InfoPopupLoader } from './info-popup/info-popup-loader.interface';
import { DemoPopupLoaderService } from './demo-popup-loader.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideAnimationsAsync(),
    { provide: InfoPopupLoader, useClass: DemoPopupLoaderService },
  ],
};
