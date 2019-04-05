import * as I from '@app/interfaces';

export class ChildStrategy implements I.ApplicationStrategy {
    getDocuments() {
        return 'дитячий проїзний документ тощо.';
    }
}