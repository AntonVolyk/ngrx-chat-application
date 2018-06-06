import { Thread } from './../../../shared/model/thread';
import { ApplicationState } from './../store/application-state';
import * as _ from 'lodash';

export function mapStateToUnreadMessagesCounter(state: {appState: ApplicationState}): number {
    const currentUserId = state.appState.uiState.userId;

    return _.values<Thread>(state.appState.storeData.threads)
        .reduce((acc, thread) => {
            return acc + (thread.participants[currentUserId] || 0);
        }, 0);
}
