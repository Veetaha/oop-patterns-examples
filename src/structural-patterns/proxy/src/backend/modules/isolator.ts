import * as I from '@modules/interfaces';
import { Log } from '@modules/debug';
import { PrisonerIssue } from '@modules/prisoner-issue';

export class Isolator implements I.Isolator {
    readonly issues = new Set<PrisonerIssue>();

    emprison(issue: PrisonerIssue)   { 
        this.issues.add(issue);        
        Log.info(`${issue.suspect.fullname} was prisonned at ${issue.creationDate.toUTCString()}`);
    }
    free(issue: PrisonerIssue)       { this.issues.delete(issue); }
    isPrisoned(issue: PrisonerIssue) { return this.issues.has(issue); }
}