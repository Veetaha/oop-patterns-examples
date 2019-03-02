import * as I from '@modules/interfaces';

export abstract class BasicComposite<TComposite extends I.Composite> implements I.Composite {
    private children = new Array<TComposite>();

    addComponent(component: TComposite) {
        this.children.push(component);
    }

    childrenAmount() {
        return this.children.length;
    }

    getChild(index: number) {
        if (index < 0 || index >= this.children.length) {
            throw new Error(`No child exists under index ${index}`);
        }
        return this.children[index];
    }

    forEachChild(...args: Parameters<Array<TComposite>['forEach']>) {
        return this.children.forEach(...args);
    }
}

