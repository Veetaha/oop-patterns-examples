import _ from 'lodash';
import * as I from '@modules/interfaces';

// ConcretePrototype2
export class Toy implements I.Clonable {
    constructor(
        readonly factoryAddress: string,
        readonly name:           string
    ) {}

    clone() { return _.cloneDeep(this); }
}
