import * as I from '@modules/interfaces';
import _ from 'lodash';
import { Isolator } from '@modules/isolator';
import { Log } from '@modules/debug';
import { PrisonerIssue } from '@modules/prisoner-issue';

export class AutomatedIsolator implements I.Isolator {
    private readonly innerIsolator = new Isolator;

    emprison(issue: PrisonerIssue) {
        const suspectName = issue.suspect.fullname;
        setTimeout(
            () => {
                if (!this.innerIsolator.isPrisoned(issue)) {
                    return;
                }
                Log.info(
                    `Attention! Suspect '${suspectName
                    }' has been being emprisoned for too much, ecase created.`
                );    
            }, 
            _.clamp(issue.creationDate.getTime() + 2000 - Date.now(), 0, Infinity)
        );

        return this.innerIsolator.emprison(issue);
    }
    free(issue: PrisonerIssue) {
        return this.innerIsolator.free(issue);
    }

}

