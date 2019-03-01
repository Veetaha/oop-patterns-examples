import { Injectable, EventEmitter } from "@angular/core";
import * as Faker from 'faker';
import * as Rx from 'rxjs';
import * as Rxo from 'rxjs/operators';

@Injectable({ providedIn: 'root'})
export class ChatService {

    onIncommingMessage = new EventEmitter<string>();

    constructor() {
        setInterval(
            () => this.onIncommingMessage.emit(Faker.lorem.sentence()), 
            1000
        );
    }

    sendMessage(_message: string) {
        return Rx.from([true]).pipe(Rxo.delay(250));
    }

}