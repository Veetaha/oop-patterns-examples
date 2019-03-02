import * as I from '@modules/interfaces';
import { BasicLeafComposite } from "@modules/basic-leaf-composite";

export class PupilParent extends BasicLeafComposite implements I.Collectable {

    constructor(private money: number) {
        super();
    }

    collectMoney() {
        return this.money;
    }
}