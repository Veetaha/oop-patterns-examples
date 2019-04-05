import * as I from '@app/interfaces';
export class Applicant {
    constructor(private applStrategy: I.ApplicationStrategy) {}

    setApplicationStrategy(applStrategy: Applicant['applStrategy']) {
        this.applStrategy = applStrategy;
    }
    

    getDocuments() {
        return this.applStrategy.getDocuments();
    }
}