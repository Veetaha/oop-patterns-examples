import * as Faker from 'faker';
import { Service }  from 'typedi';

import { Toy } from '@modules/toy';
import { Bonbon } from '@modules/bonbon';

@Service()
export class PresentsRepository {
    repo = [
        new Toy(Faker.address.country(), Faker.name.firstName()),
        new Bonbon(Faker.date.past(), Faker.company.companyName())
    ];


    makeToy() {
        return this.repo[0].clone();
    }

    makeBonbon() {
        return this.repo[1].clone();
    }

}