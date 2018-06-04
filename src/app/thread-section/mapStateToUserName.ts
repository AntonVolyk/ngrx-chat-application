import { StoreData } from './../store/store-data';
import { ApplicationState } from './../store/application-state';

export function mapStateToUserName (state): string {
    return state.storeReducer.storeData.participants[state.storeReducer.uiState.userId].name;
}
