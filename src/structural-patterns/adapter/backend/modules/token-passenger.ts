import * as I from '@modules/interfaces';
import * as Faker from 'faker';

export class TokenPassenger implements I.Passenger {
    
    constructor(readonly tokens: { tokensAmount: number }) {}

    name = Faker.name.findName()

    payForTransition() {
        if (this.tokens.tokensAmount <= 0) {
            return false;   
        }
        --this.tokens.tokensAmount;
        return true;
    }
}