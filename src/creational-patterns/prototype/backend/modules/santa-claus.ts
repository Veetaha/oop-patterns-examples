import * as I from '@modules/interfaces';
import * as Faker from 'faker';
import { Service } from 'typedi';

import { Log } from '@modules/debug';
import { PresentsRepository } from '@modules/presents-repository';


@Service()
export class SantaClaus {    
    private readonly presents = new Set<I.Present>();
    
    constructor(
        private readonly presentsRepo: PresentsRepository
    ) {}

    populatePresents() {
        for (let i = 1; i < 10; ++i) {
            this.presents.add(
                Math.random() < 0.5 
                    ? this.presentsRepo.makeToy() 
                    : this.presentsRepo.makeBonbon() 
            );
        }
        return this;
    }

    deliverPresents() {
        for (const present of this.presents) {
            Log.info(`${Faker.name.firstName()} got present "${JSON.stringify(present)}"`);
        }
        return this;
    }
}