import * as I from '@modules/interfaces';
import * as Faker from 'faker';

export class CardPassenger implements I.Passenger {
    
    constructor(readonly card: { transitions: number }) {}

    name = Faker.name.findName()

    payForTransition() {
        if (this.card.transitions <= 0) {
            return false;   
        }
        --this.card.transitions;
        return true;
    }
}