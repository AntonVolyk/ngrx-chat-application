import { Observable } from 'rxjs/Observable';
import { ThreadsService } from './../../services/threads.service';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { LOAD_USER_THREADS_ACTION, UserThreadsLoadedAction} from '../actions';
import { Action } from '@ngrx/store';

@Injectable()
export class LoadThreadsEffectService {
  @Effect()
  userThreads$: Observable<Action> = this.actions$
    .ofType(LOAD_USER_THREADS_ACTION)
    .debug('action received')
    .switchMap(() => this.threadsService.loadUserThreads())
    .debug('action received')
    .map(allUserData => new UserThreadsLoadedAction(allUserData));

  constructor(private actions$: Actions, private threadsService: ThreadsService) {
  }
}

