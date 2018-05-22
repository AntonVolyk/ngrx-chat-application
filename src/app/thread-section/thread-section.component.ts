import { ApplicationState } from './../store/application-state';
import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '../services/threads.service';
import { Store } from '@ngrx/store';
import { LoadUserThreadsAction } from '../store/actions';
import 'rxjs/add/operator/skip';


@Component({
  selector: 'thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.css']
})
export class ThreadSectionComponent implements OnInit {
  userName; string;

  constructor(private threadsService: ThreadsService, private store: Store<{ storeReducer: ApplicationState }>) {
    store
      .skip(1)
      .subscribe(state => {
        this.userName = state.storeReducer.storeData.participants[state.storeReducer.uiState.userId].name;
      });
  }

  ngOnInit() {
    this.threadsService.loadUserThreads()
      .subscribe(
        allUserData => this.store.dispatch(
          new LoadUserThreadsAction(allUserData)
        )
      );
  }
}
