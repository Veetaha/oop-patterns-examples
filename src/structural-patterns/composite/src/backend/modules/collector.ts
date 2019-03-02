import * as I from '@modules/interfaces';
import { BasicComposite } from "@modules/basic-composite";
import { PupilParent } from '@modules/pupil-parent';

export enum Profession {
    ClassroomTeacher,
    HeadTeacher,
    Headmaster
}

export class Collector extends BasicComposite<Collector | PupilParent> implements I.Collectable {
    
    constructor(
        public readonly name: string, 
        public readonly profession: Profession
    ) {
        super();
    }

    addComponent(component: Collector | PupilParent) {
        if (component instanceof PupilParent) {
            if (this.profession !== Profession.ClassroomTeacher) {
                throw new Error('Only classroom teachers may supervise pupil parents');
            }
        } else {
            if (this.profession !== component.profession + 1) {
                throw new Error('Subordination error!');
            }
        }
        super.addComponent(component);
    }

    collectMoney() {
        let money = 0;
        this.forEachChild(child => money += child.collectMoney());
        return money;
    }

}