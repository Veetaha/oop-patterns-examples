import Uuid from 'uuid/v4';

export class Person {
    readonly id = Uuid();
    constructor(readonly fullname: string) {}
}
