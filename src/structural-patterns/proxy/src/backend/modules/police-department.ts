import * as Faker from 'faker';
import { PrisonerIssue } from '@modules/prisoner-issue'
import { Person } from './preson';
import { AutomatedIsolator } from '@modules/automated-isolator';

export class PoliceDept {
    constructor(
        public readonly name: string,
        private isolator = new AutomatedIsolator
    ) {}
    
    investigate(crimeDescr: string) {
        const issue = new PrisonerIssue(
            { description: crimeDescr }, 
            new Person(Faker.name.firstName())
        );
        this.isolator.emprison(issue);
        return issue;
    }    
    free(issue: PrisonerIssue) {
        this.isolator.free(issue);
    }
}