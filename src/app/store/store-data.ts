import { Message } from './../../../shared/model/message';
import { Participant } from './../../../shared/model/participant';
import { Thread } from '../../../shared/model/thread';

export interface StoreData {
    participants: { [key: number]: Participant };
    messages: { [key: number]: Message };
    threads: { [key: number]: Thread };
}

export const INITIAL_STORE_DATA: StoreData = {
    participants: {},
    messages: {},
    threads: {}
}
