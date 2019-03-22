import * as I from '@modules/interfaces';
import { Person } from '@modules/preson';

export class PrisonerIssue {
    constructor(
        readonly crime:   I.Crime,
        readonly suspect: Person
    ) {}

    readonly creationDate = new Date;
}