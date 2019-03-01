import * as I from '@modules/interfaces';

export abstract class BasicChat implements I.Chat {
    constructor(private impl: I.Chat) {}

    sendMessage(...args: Parameters<I.Chat['sendMessage']>) { 
        return this.impl.sendMessage(...args);
    }

    init() {
        return this.impl.init();
    }

}