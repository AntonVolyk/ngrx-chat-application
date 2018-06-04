import { Thread } from './../../../shared/model/thread';
import { ApplicationState } from './../store/application-state';
import * as _ from 'lodash';

export function mapStateToUnreadMessagesCounter(state): number {
    const currentUserId = state.storeReducer.uiState.userId;

    return _.values<Thread>(state.storeReducer.storeData.threads)
        .reduce((acc, thread) => {
            return acc + thread.participants[currentUserId];
        }, 0);
}
