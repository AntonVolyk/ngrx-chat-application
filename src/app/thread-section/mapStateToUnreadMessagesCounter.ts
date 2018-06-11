import { Thread } from './../../../shared/model/thread';
import { ApplicationState } from './../store/application-state';
import * as _ from 'lodash';
import { AppState } from '../store/store-data';

export function mapStateToUnreadMessagesCounter(state: AppState): number {
    const currentUserId = state.appState.uiState.userId;

    return _.values<Thread>(state.appState.storeData.threads)
        .reduce((acc, thread) => {
            return acc + (thread.participants[currentUserId] || 0);
        }, 0);
}
