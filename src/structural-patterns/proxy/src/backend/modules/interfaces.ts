import { PrisonerIssue } from '@modules/prisoner-issue';

export * from '@common/interfaces';


export interface Crime {
    description: string;
}

export interface Isolator {
    emprison(issue: PrisonerIssue): void;
    free(issue: PrisonerIssue): void;
}