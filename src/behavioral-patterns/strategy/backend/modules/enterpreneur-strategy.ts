import * as I from '@app/interfaces';

export class EnterpreneurStrategy implements I.ApplicationStrategy {
    getDocuments() {
        return 'копія звіту про прибуток за останні 2 квартали з податкової інспекції';
    }
}