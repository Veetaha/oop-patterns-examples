import _ from 'lodash';
import * as I from '@modules/interfaces';

//  ConcretePrototype1
export class Bonbon implements I.Clonable {
    constructor(
        readonly creationDate: Date,
        readonly title:        string
    ) {}

    clone() { return _.cloneDeep(this); }
}