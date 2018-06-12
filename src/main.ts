import { Observable } from 'rxjs/Observable';
import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

const debuggerOn = true;

Observable.prototype.debug = function(message: string) {
  return this.do(
    nextValue => {
      if (debuggerOn) {
        console.log(message, nextValue);
      }
    },
    error => {
      if (debuggerOn) {
        console.log(message, error);
      }
    },
    () => {
      if (debuggerOn) {
        console.log('Observable completed: ', message);
      }
    }
  );
};

declare module 'rxjs/Observable' {
  interface Observable<T> {
    debug: (...any) => Observable<T>;
  }
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
