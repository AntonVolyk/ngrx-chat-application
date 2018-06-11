import { StoreData, AppState } from './../store/store-data';
import { ApplicationState } from './../store/application-state';
import { Store } from '@ngrx/store';

export function userNameSelector (state: AppState): string {
    const currentUserId = state.appState.uiState.userId;
    const currentParticipant = state.appState.storeData.participants[currentUserId];
    
    if (!currentUserId) {
        return '';
    }

    return currentParticipant ? currentParticipant.name : '';
}
