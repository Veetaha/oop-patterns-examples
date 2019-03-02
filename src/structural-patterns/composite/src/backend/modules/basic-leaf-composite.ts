import * as I from '@modules/interfaces';

export abstract class BasicLeafComposite implements I.Composite {
    addComponent() {
        throw new Error('Leaf component cannot affiliate children');
    }
    childrenAmount() {
        return 0;
    }
    getChild(): I.Composite {
        throw new Error('Leaf component has no children');
    }
    forEachChild() {}
}