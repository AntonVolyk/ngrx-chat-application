import { ApplicationState } from './../store/application-state';
import { Thread } from '../../../shared/model/thread';
import { ThreadSummaryVM } from './thread-summary.vm';
import * as _ from 'lodash';
import { Store } from '@ngrx/store';

export function stateToThreadSummariesSelector(state: {appState: ApplicationState}): ThreadSummaryVM[] {
  const threads = _.values<Thread>(state.appState.storeData && state.appState.storeData.threads);

  return threads.map(_.partial(mapThreadToThreadSummary, state));
}

function mapThreadToThreadSummary(state: {appState: ApplicationState}, thread: Thread): ThreadSummaryVM {
  const names: string[] = _.keys(thread.participants)
  .map(id => state.appState.storeData.participants[id].name);
  const lastMessageId: number = _.last(thread.messageIds);
  const lastMessage = state.appState.storeData.messages[lastMessageId];

  return {
    id: thread.id,
    participantNames: _.join(names, ','),
    lastMessageText: lastMessage.text,
    timestamp: lastMessage.timestamp
  }
}
