import * as Faker from 'faker';

export class User {
    constructor(
        public readonly name = Faker.internet.userName()
    ) {}
}