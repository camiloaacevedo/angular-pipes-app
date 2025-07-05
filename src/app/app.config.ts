import {
  ApplicationConfig,
  LOCALE_ID,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';

import localesEs from '@angular/common/locales/es';
import localesFr from '@angular/common/locales/fr';
import { LocaleService } from './services/locale.service';

registerLocaleData(localesEs, 'es');
registerLocaleData(localesFr, 'fr');

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    {
      provide: LOCALE_ID,
      // useValue: 'fr',
      deps: [LocaleService],
      useFactory: (localservice: LocaleService) => localservice.getLocale,
    },
  ],
};
