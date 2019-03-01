import * as I from '@modules/interfaces';
import * as Faker from 'faker';

export class CoreChat implements I.Chat {

    constructor(
        public readonly name = `${Faker.random.word()} chat`
    ) {}

    init() {
        console.log(`----${this.name}----`);
    }

    sendMessage({issuer, text}: I.Message) {
        console.log(`${issuer.name}: ${text}`);
    }    
}

